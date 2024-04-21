// users.repository.ts
import { DataSource } from 'typeorm';
import { User } from './user.entity'; // Replace with your entity path
import { Repository } from 'typeorm';

export class UserRepository extends Repository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource.manager);
    }

    findByName(firstName: string, lastName: string): Promise<User[]> {
        const queryBuilder = this.dataSource.createQueryBuilder(User, "user");
        return queryBuilder
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany();
    }
}

// service.ts
import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {
    private readonly userRepository: UserRepository;

    constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {
        this.userRepository = new UserRepository(this.dataSource);
    }

    async findUsersByName(firstName: string, lastName: string): Promise<User[]> {
        return await this.userRepository.findByName(firstName, lastName);
    }

    // ... other service methods using userRepository
}

