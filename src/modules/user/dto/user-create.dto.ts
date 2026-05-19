export class UserCreateDto {
  name!: string;

  email!: string;

  password!: string;
}

export class UserReturnDto {
  id!: string;

  createdAt!: Date;
}
