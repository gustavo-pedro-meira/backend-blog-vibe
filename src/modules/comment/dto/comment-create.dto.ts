export class CommentCreateDto {
  content!: string;

  userId!: string;

  postId!: string;
}

export class CommentReturnDto {
  id!: string;

  createdAt!: Date;
}
