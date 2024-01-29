import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getOneUser(userId: string): string {
        return 'this is my' + userId;
    }
}
