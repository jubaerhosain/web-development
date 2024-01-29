import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';

@Module({
    imports: [UserModule, AuthModule, StudentsModule],
})
export class AppModule {}
