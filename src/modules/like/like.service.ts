import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { LikeCreateDto } from './dto/like-create.dto';

@Injectable()
export class LikeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.like.findMany();
  }

  async findOne(postId: string, userId: string) {
    const like = await this.prisma.like.findUnique({
      where: {
        userId_postId: {
          userId: userId,
          postId: postId,
        },
      },
    });
    if (!like) {
      throw new NotFoundException('Like not found');
    }

    return like;
  }

  async create(likeCreateDto: LikeCreateDto) {
    return await this.prisma.like.create({
      data: {
        ...likeCreateDto,
      },
    });
  }

  async delete(postId: string, userId: string) {
    await this.findOne(postId, userId);

    return await this.prisma.like.delete({
      where: {
        userId_postId: {
          userId: userId,
          postId: postId,
        },
      },
    });
  }
}
