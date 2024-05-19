In NestJS, you can achieve access to the `currentUserId` in the service layer without having to pass it explicitly from the controller by using the built-in dependency injection system along with custom providers and middleware. Here’s a step-by-step guide on how to achieve this:

### Step 1: Create a Custom Decorator

First, create a custom decorator to easily access the `currentUserId` from the request object.

```typescript
// src/common/decorators/user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user?.id;
  },
);
```

### Step 2: Create Middleware to Attach User to Request

Ensure you have middleware that attaches the user object to the request. Typically, this middleware would decode a JWT token and attach the user details to the request object.

```typescript
// src/common/middleware/auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      try {
        const user = await this.jwtService.verifyAsync(token);
        req.user = user;
      } catch (error) {
        // Handle token verification error
      }
    }
    next();
  }
}
```

### Step 3: Apply Middleware

Apply the middleware globally or to specific routes where you need to access the `currentUserId`.

```typescript
// src/app.module.ts
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({ secret: 'your_secret_key' })],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
```

### Step 4: Use Request Context to Access User in Service

To access the `currentUserId` in the service layer, you can use a custom provider that stores the current request context. Here, `cls-hooked` package can be helpful.

#### Install `cls-hooked`

```bash
npm install cls-hooked
```

#### Create RequestContext

```typescript
// src/common/request-context/request-context.service.ts
import { Injectable, Scope } from '@nestjs/common';
import { createNamespace } from 'cls-hooked';

const REQUEST_CONTEXT_NAMESPACE = 'REQUEST_CONTEXT';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {
  private readonly namespace = createNamespace(REQUEST_CONTEXT_NAMESPACE);

  run(callback: () => void) {
    this.namespace.run(callback);
  }

  set(key: string, value: any) {
    this.namespace.set(key, value);
  }

  get<T>(key: string): T {
    return this.namespace.get(key);
  }
}
```

#### Use Middleware to Store RequestContext

```typescript
// src/common/middleware/request-context.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextService } from '../request-context/request-context.service';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(private readonly requestContextService: RequestContextService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.requestContextService.run(() => {
      this.requestContextService.set('user', req.user);
      next();
    });
  }
}
```

#### Apply RequestContextMiddleware

```typescript
// src/app.module.ts
import { RequestContextMiddleware } from './common/middleware/request-context.middleware';

@Module({
  providers: [RequestContextService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*');
  }
}
```

### Step 5: Access the `currentUserId` in Service Layer

Now you can inject `RequestContextService` in your services and access the `currentUserId`.

```typescript
// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { RequestContextService } from '../common/request-context/request-context.service';

@Injectable()
export class UserService {
  constructor(private readonly requestContextService: RequestContextService) {}

  getCurrentUserId() {
    const user = this.requestContextService.get('user');
    return user ? user.id : null;
  }

  // Example method using the current user ID
  async getUserProfile() {
    const currentUserId = this.getCurrentUserId();
    if (!currentUserId) {
      throw new Error('User not authenticated');
    }
    // Logic to get user profile by ID
  }
}
```

This setup allows you to access `currentUserId` directly in any service without explicitly passing it down from the controller.
