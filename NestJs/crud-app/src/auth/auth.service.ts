import { Injectable } from "@nestjs/common";
import { LoginDto } from "./dto";

@Injectable()
export class AuthService {
    async login(loginDto: LoginDto) {
        return loginDto;
    }
}