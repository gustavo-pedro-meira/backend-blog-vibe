export class PostCreateDto {
  userId!: string;

  content!: string;
}

export class PostReturnDto {
  id!: string;

  createdAt!: Date;
}
