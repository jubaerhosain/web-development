You're absolutely right. The `ThreadLocal` class was indeed part of NestJS in earlier versions, but it has been removed in recent releases. Here's an updated approach that leverages dependency injection and a custom service to achieve the same functionality of storing and retrieving the current user ID in NestJS service layers:

**1. Custom CurrentUserService:**

- Create a service named `CurrentUserService` to handle storing and retrieving the user ID.
- Utilize dependency injection to inject this service into your service layers.

```typescript
// current-user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrentUserService {
  private userId: string | null = null;

  setUserId(userId: string | null) {
    this.userId = userId;
  }

  getUserId(): string | null {
    return this.userId;
  }
}
```

**2. Middleware Implementation:**

- Create a custom middleware that intercepts incoming requests and stores the user ID in the `CurrentUserService`.

```typescript
// current-user.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly currentUserService: CurrentUserService) {}

  use(req: Request, res: Response, next: Function) {
    // Extract user ID from request (replace with your logic)
    const userId = req.user?.id;

    this.currentUserService.setUserId(userId);
    next();
  }
}
```

**3. Service Layer Access:**

- Inject the `CurrentUserService` into your service layers.
- Use the service's `getUserId` method to access the stored user ID.

```typescript
// my.service.ts
import { Injectable } from '@nestjs/common';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class MyService {
  constructor(private readonly currentUserService: CurrentUserService) {}

  async someMethod() {
    const userId = this.currentUserService.getUserId();
    // Use userId in your service logic
  }
}
```

**4. Usage in Your Application:**

- Register the `CurrentUserMiddleware` in your NestJS application module.

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MyService } from './my.service';
import { CurrentUserService } from './current-user.service';
import { CurrentUserMiddleware } from './current-user.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MyService, CurrentUserService, CurrentUserMiddleware],
})
export class AppModule {}
```

With this approach, you maintain a clean separation of concerns between user ID storage/retrieval and service logic. The `CurrentUserService` acts as a centralized point for managing the user ID, making it accessible from various service layers.
