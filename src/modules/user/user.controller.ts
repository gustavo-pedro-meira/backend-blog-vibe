import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() userCreateDto: UserCreateDto) {
    return await this.userService.create(userCreateDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto) {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
