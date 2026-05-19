import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { PostUpdateDto } from './dto/post-update.dto';
import { PostCreateDto } from './dto/post-create.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        user: true,
        likes: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
  }

  async create(postCreateDto: PostCreateDto) {
    return await this.prisma.post.create({
      data: {
        ...postCreateDto,
      },
    });
  }

  async update(id: string, postUpdateDto: PostUpdateDto) {
    await this.findOne(id);

    return await this.prisma.post.update({
      where: {
        id: id,
      },
      data: {
        ...postUpdateDto,
      },
    });
  }

  async delete(id: string) {
    await this.findOne(id);

    return await this.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}
