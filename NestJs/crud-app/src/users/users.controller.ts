import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<any> {
        return 'createUser';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return this.userService.getOneUser(id);
    }

    @Get()
    findAll() {}

    @Get(':userId/posts/:postId')
    findAllUserPosts(@Param('userId') userId: string, @Param('postId') postId: string) {
        return `users/${userId}/posts/${postId}`;
    }
}
