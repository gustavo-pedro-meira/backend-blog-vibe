import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentCreateDto } from './dto/comment-create.dto';
import { CommentUpdateDto } from './dto/comment-update.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAll() {
    return await this.commentService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.commentService.findOne(id);
  }

  @Post()
  async create(@Body() commentCreateDto: CommentCreateDto) {
    return await this.commentService.create(commentCreateDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() commentUpdateDto: CommentUpdateDto,
  ) {
    return await this.commentService.update(id, commentUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.commentService.delete(id);
  }
}
