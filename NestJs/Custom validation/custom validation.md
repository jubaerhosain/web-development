In NestJS, you can perform form validation using the class-validator library. Additionally, you can use class-transformer for transforming and validating objects. To achieve a custom error response with key-value pairs, you can create a validation pipe and customize the error message formatting.

Here's an example of how you can implement form validation in NestJS with a custom error response:

1. Install the required packages:

```bash
npm install class-validator class-transformer
```

2. Create a DTO (Data Transfer Object) for your form data. For example:

```typescript
// create-user.dto.ts
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name must not be empty' })
  name: string;

  @IsNotEmpty({ message: 'Email must be provided' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
```

3. Create a custom validation pipe:

```typescript
// validation.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const { metatype } = metadata;

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const errorResponse = {};
      errors.forEach((error) => {
        const propertyName = error.property;
        Object.entries(error.constraints).forEach(([key, message]) => {
          errorResponse[propertyName] = message;
        });
      });
      throw new BadRequestException({ message: 'Validation failed', errors: errorResponse });
    }

    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
```

4. Apply the validation pipe globally or at the controller level:

```typescript
// app.module.ts
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
```

Now, when a validation error occurs, the custom validation pipe will format the error response in the desired key-value pair format. You can customize the messages in the DTO and handle the formatting logic in the validation pipe as needed.