export class UserCreateDto {
  name: string | undefined;

  email: string | undefined;

  password: string | undefined;
}

export class UserReturnDto {
  id: string | undefined;

  createdAt: Date | undefined;
}
