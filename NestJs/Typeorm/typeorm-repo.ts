import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TenantRepository extends Repository<TenantEntity>{

  constructor(private dataSource: DataSource) {
    super(TenantEntity, dataSource.createEntityManager());
  }

  async createTenant(createTenantDto: CreateTenantDto): Promise<TenantEntity> {
    const { name, email } = createTenantDto;

    const newTenant = this.create({ name, email });
    await this.save(newTenant);

    return newTenant;
  }
}

// ========================================

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

export class UserRepository extends Repository<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
    }

    // sample method for demo purposes
    async findByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.findOneBy({ email }); // could also be this.findOneBy({ email });, but depending on your IDE/TS settings, could warn that userRepository is not used though. Up to you to use either of the 2 methods
    }
    
    // your other custom methods in your repo...
}
