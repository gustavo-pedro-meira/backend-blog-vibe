import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeCreateDto } from './dto/like-create.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  async getAll() {
    return await this.likeService.findAll();
  }

  @Get(':postId/:userId')
  async getOne(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return await this.likeService.findOne(postId, userId);
  }

  @Post()
  async create(@Body() likeCreateDto: LikeCreateDto) {
    return await this.likeService.create(likeCreateDto);
  }

  @Delete(':postId/:userId')
  async delete(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    return await this.likeService.delete(postId, userId);
  }
}
