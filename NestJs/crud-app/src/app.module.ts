import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';

@Module({
    imports: [UsersModule, AuthModule, StudentsModule],
})
export class AppModule {}
