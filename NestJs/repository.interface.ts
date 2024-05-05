/* eslint-disable @typescript-eslint/no-unused-vars */

import { PartialDeep } from 'type-fest';

interface IFindOneOptions<T> {
  filterBy?: PartialDeep<T>;
  relations?: string[];
}

interface IFindManyOptions<T> {
  filterBy?: PartialDeep<T>; // Allow filtering by properties of the entity
  relations?: string[]; // List of relations to eager load
  page?: number; // Offset for pagination
  limit?: number; // Limit for pagination
  order?: Partial<{ [K in keyof T]: 'ASC' | 'DESC' }>;
}

export interface IBaseRepository<T> {
  createOne(data: PartialDeep<T>): T;
  createMany(data: PartialDeep<T>[]): T[];
  saveOne(data: PartialDeep<T>): Promise<T>;
  saveMany(data: PartialDeep<T>[]): Promise<T[]>;
  findOne(attributes: IFindOneOptions<T>): Promise<T>;
  findOneById(id: string | number): Promise<T>;
  findMany(attributes?: IFindManyOptions<T>): Promise<T[]>;
  hardDelete(data: T): Promise<T>;
  softDelete(data: T): Promise<T>;
}

export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class BaseRepository implements IBaseRepository<UserEntity> {
  createOne(data: PartialDeep<UserEntity>): UserEntity {
    throw new Error('Method not implemented.');
  }
  createMany(data: PartialDeep<UserEntity>[]): UserEntity[] {
    throw new Error('Method not implemented.');
  }
  saveOne(data: PartialDeep<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  saveMany(data: PartialDeep<UserEntity>[]): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(attributes: IFindOneOptions<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findOneById(id: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findMany(attributes?: IFindManyOptions<UserEntity>): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  hardDelete(data: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  softDelete(data: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}

const obj = new BaseRepository();

obj.findMany({
  filterBy: { name: 'Jubaer' },
  order: { name: 'ASC' },
});
