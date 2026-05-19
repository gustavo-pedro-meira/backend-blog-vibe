import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDto } from './dto/post-create.dto';
import { PostUpdateDto } from './dto/post-update.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll() {
    return await this.postService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @Post()
  async create(@Body() postCreateDto: PostCreateDto) {
    return await this.postService.create(postCreateDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() postUpdateDto: PostUpdateDto) {
    return await this.postService.update(id, postUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.postService.delete(id);
  }
}
