import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getOneUser(userId: string): string {
        return 'this is my' + userId;
    }
}
