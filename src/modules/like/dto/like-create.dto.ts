export class LikeCreateDto {
  userId: string | undefined;

  postId: string | undefined;
}

export class LikeReturnDto {
  likeDate: Date | undefined;
}
