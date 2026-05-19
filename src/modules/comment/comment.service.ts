import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CommentCreateDto } from './dto/comment-create.dto';
import { CommentUpdateDto } from './dto/comment-update.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.comment.findMany();
  }

  async findOne(id: string) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        id: id,
      },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
  }

  async create(commentCreateDto: CommentCreateDto) {
    return await this.prisma.comment.create({
      data: {
        ...commentCreateDto,
      },
    });
  }

  async update(id: string, updateCommentDto: CommentUpdateDto) {
    await this.findOne(id);

    return await this.prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        ...updateCommentDto,
      },
    });
  }

  async delete(id: string) {
    await this.findOne(id);

    return await this.prisma.comment.delete({
      where: {
        id: id,
      },
    });
  }
}
