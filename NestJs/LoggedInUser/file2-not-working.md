I'd be glad to help you retrieve the current user ID in NestJS service layers without directly accessing the controller. Here are two effective approaches:

**1. Custom Middleware with ThreadLocal Storage:**

- Create a custom middleware that intercepts incoming requests and stores the user ID in ThreadLocal storage.
- Service layers can then access the stored user ID using the ThreadLocal service.

**Middleware Implementation:**

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { ThreadLocal } from 'nestjs/jsonserialization';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly threadLocal: ThreadLocal) {}

  use(req: Request, res: Response, next: Function) {
    // Extract user ID from request (replace with your logic)
    const userId = req.user?.id;

    this.threadLocal.set('userId', userId);
    next();
  }
}
```

**Service Layer Access:**

```typescript
import { Injectable } from '@nestjs/common';
import { ThreadLocal } from 'nestjs/jsonserialization';

@Injectable()
export class MyService {
  constructor(private readonly threadLocal: ThreadLocal) {}

  async someMethod() {
    const userId = this.threadLocal.get('userId');
    // Use userId in your service logic
  }
}
```

**2. Interceptors with Passport.js:**

- If you're using Passport.js for authentication, leverage interceptors to capture the user object from the request and make it accessible in the service layer.

**Interceptor Implementation:**

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Provided by Passport.js

    return next.handle().pipe(
      tap(() => {
        // Optional: Clear user from context after handling
        // delete request.user;
      }),
    );
  }
}
```

**Service Layer Access (assuming user object in request):**

```typescript
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class MyService {
  constructor(private readonly request: Request) {}

  async someMethod() {
    const user = this.request.user; // Access user object from request
    const userId = user?.id; // Extract user ID from user object
    // Use userId in your service logic
  }
}
```

**Choosing the Right Approach:**

- If you're not using Passport.js and need a more generic solution, the custom middleware with ThreadLocal storage is a good choice.
- If you're already using Passport.js, interceptors provide a cleaner integration with the authentication flow.

**Additional Considerations:**

- **ThreadLocal Storage Caveats:** Be mindful of potential memory leaks if the user ID isn't cleared properly. Consider clearing it after handling the request in the interceptor's `tap` operator.
- **Security:** Ensure proper user object validation and access control mechanisms within your service layer to prevent unauthorized access.

By following these guidelines, you can effectively retrieve the current user ID in your NestJS service layers without tightly coupling them to controllers.
