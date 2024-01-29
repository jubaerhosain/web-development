import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    async login(loginDto: LoginDto) {
        return loginDto;
    }
}