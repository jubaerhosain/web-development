With the current version of TypeORM, it's possible to implement a custom repository in the following way utilizing DataSource.

// user.repository.ts
@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
  constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }

  async getById(id: string) {
    return this.findOne({ where: { id } });
  }
  // ...
}
The repository is then injected into the service.

// user.service.ts
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getById(id: string): Promise<User> {
    return this.userRepository.getById(id);
  }
  // ...
}
and the module has imports for the feature and the repository as a provider.

// user.module.ts
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])],
    // ...
  ],
  providers: [UserService, UserRepository],
  // ...
})
export class UserModule {}
