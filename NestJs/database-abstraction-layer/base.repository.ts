import { PartialDeep } from 'type-fest';
import {
  IBaseRepository,
  IFindOneOptions,
  IFindManyOptions,
} from './repository.interface';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class BaseRepository implements IBaseRepository<UserEntity> {
  constructor(private readonly repository: Repository<UserEntity>) {}

  createOne(data: PartialDeep<UserEntity>): UserEntity {
    return this.repository.create(data);
  }

  createMany(data: PartialDeep<UserEntity>[]): UserEntity[] {
    return this.repository.create(data);
  }

  async saveOne(data: PartialDeep<UserEntity>): Promise<UserEntity> {
    return await this.repository.save(data);
  }

  async saveMany(data: PartialDeep<UserEntity>[]): Promise<UserEntity[]> {
    return this.repository.save(data);
  }

  async findOne(options: IFindOneOptions<UserEntity>): Promise<UserEntity> {
    const typeormOptions: FindOneOptions = {
      where: {
        ...options.filterBy,
      },
      relations: options.relations,
    };
    return await this.repository.findOne(typeormOptions);
  }

  async findOneById(id: string): Promise<UserEntity> {
    return await this.repository.findOneBy({ id });
  }

  async findMany(
    options?: IFindManyOptions<UserEntity>,
  ): Promise<UserEntity[]> {
    const typeormOptions: FindManyOptions = {
      where: {
        ...options.filterBy,
      },
      relations: options.relations,
      skip: options.limit ? options.limit - 1 : 0,
      take: options.limit ? options.limit : 10,
    };

    return await this.repository.find(typeormOptions);
  }

  async delete(data: UserEntity): Promise<UserEntity> {
    const d = await this.repository.delete(data);
    return d as any;
  }

  async deleteById(id: string): Promise<UserEntity> {
    const d = await this.repository.delete({ id });
    return d as any;
  }

  async softDelete(data: UserEntity): Promise<UserEntity> {
    const d = await this.repository.softRemove(data);
    return d as any;
  }

  async softDeleteById(id: string): Promise<UserEntity> {
    const d = await this.repository.softRemove({ id });
    return d as any;
  }
}

const repo = 'repository' as any;
const obj = new BaseRepository(repo);

obj.findMany({
  filterBy: { name: 'Jubaer' },
  order: { name: 'ASC' },
});
