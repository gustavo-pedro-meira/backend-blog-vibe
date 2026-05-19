import { PartialType } from '@nestjs/mapped-types';
import { CommentCreateDto } from './comment-create.dto';

export class CommentUpdateDto extends PartialType(CommentCreateDto) {}
