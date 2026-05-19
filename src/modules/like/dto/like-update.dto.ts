import { PartialType } from '@nestjs/mapped-types';
import { LikeCreateDto } from './like-create.dto';

export class LikeUpdateDto extends PartialType(LikeCreateDto) {}
