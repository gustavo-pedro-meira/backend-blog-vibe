export class CommentCreateDto {
  content: string | undefined;

  userId: string | undefined;

  postId: string | undefined;
}

export class CommentReturnDto {
  id!: string;

  createdAt: Date | undefined;
}
