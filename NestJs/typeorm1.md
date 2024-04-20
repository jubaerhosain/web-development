In NestJS with TypeORM versions above 3.0.0, extending the `Repository` class directly for custom repositories is no longer recommended. Here's how to achieve custom functionality using alternative approaches:

**1. Custom Methods within the Service:**

- Move custom logic and queries from a custom repository class directly into your service layer.
- This keeps all ORM-related methods (query, aggregations, etc.) within the service, promoting separation of concerns and easier testing.

**Example:**

```typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ email });
  }

  async findActiveUsers(): Promise<User[]> {
    // Custom query using TypeORM's query builder
    const qb = this.usersRepository.createQueryBuilder('user');
    qb.where('user.isActive = :isActive', { isActive: true });
    return await qb.getMany();
  }
}
```

**2. Custom Query Builders:**

- If your custom logic involves complex queries, consider creating separate helper functions or classes for query building.
- This improves code reusability and maintainability.

**Example:**

```typescript
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findActiveUsers(): Promise<User[]> {
    const qb = this.createQueryBuilder('user');
    qb.where('user.isActive = :isActive', { isActive: true });
    return await qb.getMany();
  }
}

// In your service:
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async getActiveUsers(): Promise<User[]> {
    return await this.userRepository.findActiveUsers();
  }
}
```

**3. Custom Query Runner:**

- For very low-level database operations that cannot be achieved with standard TypeORM methods, consider using the custom query runner approach.
- This is less common and requires careful handling for security reasons (avoiding raw SQL injection).

**Remember:** When using custom queries, prioritize security by using parameterized queries and avoiding raw string concatenation.

By following these practices, you can effectively extend TypeORM functionality in your NestJS applications while maintaining code clarity and best practices.
