/* eslint-disable @typescript-eslint/no-unused-vars */

import { PartialDeep } from 'type-fest';

export interface IFindOneOptions<T> {
  filterBy?: PartialDeep<T>;
  relations?: string[];
}

export interface IFindManyOptions<T> {
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
  delete(data: T): Promise<T>;
  deleteById(id: string | number): Promise<T>;
  softDelete(data: T): Promise<T>;
  softDeleteById(id: string | number): Promise<T>;
}
