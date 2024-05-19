Here's how to implement the repository pattern in NestJS with Sequelize:

1.  Create an Abstract Repository Class (Optional):

This class defines the basic functionalities common to all repositories. It provides a blueprint and enforces type safety with generics.

TypeScript

import { Injectable } from '@nestjs/common';

import { Sequelize } from 'sequelize-typescript';



export abstract class AbstractRepository<Entity> {

  protected entity: any; // Replace with your entity type



  constructor(protected sequelize: Sequelize) {}



  async findAll(): Promise<Entity[]> {

    return await this.entity.findAll();

  }



  async findOne(id: number): Promise<Entity | null> {

    return await this.entity.findByPk(id);

  }



  // Add other common methods like create, update, delete etc.

}

2.  Concrete Repository Class:

This class extends the AbstractRepository (if used) and defines specific methods for your entity.

TypeScript

import { Injectable } from '@nestjs/common';

import { Sequelize } from 'sequelize-typescript';

import { User } from './user.entity'; // Replace with your entity

import { AbstractRepository } from './abstract.repository';



@Injectable()

export class UserRepository extends AbstractRepository<User> {

  constructor(sequelize: Sequelize) {

    super(sequelize.models.User); // Inject your entity model

  }



  async findByEmail(email: string): Promise<User | null> {

    return await this.entity.findOne({ where: { email } });

  }



  // Add specific methods for your User entity

}

3.  Using the Repository in a Service:

Inject the repository into your service and use its methods to interact with the database.

TypeScript

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm'; // Change to @nestjs/sequelize for Sequelize

import { User } from './user.entity';

import { UserRepository } from './user.repository';



@Injectable()

export class UserService {

  constructor(

    @InjectRepository(UserRepository)

    private readonly userRepository: UserRepository,

  ) {}



  async findAll(): Promise<User[]> {

    return await this.userRepository.findAll();

  }



  async findByEmail(email: string): Promise<User | null> {

    return await this.userRepository.findByEmail(email);

  }

}

4.  Benefits:

Separation of Concerns: Repositories handle data access logic, keeping services clean and focused on business logic.

Testability: Repositories can be easily mocked for unit testing in isolation.

Reusability: Common functionalities can be defined in the abstract class and reused across repositories.

Maintainability: The code becomes more organized and easier to understand.

Additional Notes:

Remember to replace User with your actual entity name and update the code accordingly.

You can further customize the repositories with additional methods specific to your entities.

Error handling and transaction management can be implemented within the repositories.

By following these steps, you can effectively implement the repository pattern with Sequelize in your NestJS application.