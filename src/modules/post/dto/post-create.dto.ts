export class PostCreateDto {
  userId: string | undefined;

  content: string | undefined;
}

export class PostReturnDto {
  id: string | undefined;

  createdAt: Date | undefined;
}
