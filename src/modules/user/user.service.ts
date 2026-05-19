import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async userExistEmail(email: string | undefined) {
    const userExist = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExist) {
      throw new ConflictException('User already exists');
    }

    return;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async create(userCreateDto: UserCreateDto) {
    await this.userExistEmail(userCreateDto.email);

    const passswordHashe = await hash(userCreateDto.password, 10);

    return await this.prisma.user.create({
      data: {
        ...userCreateDto,
        password: passswordHashe,
      },
    });
  }

  async update(id: string, userUpdateeDto: UserUpdateDto) {
    await this.findOne(id);

    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...userUpdateeDto,
      },
    });
  }

  async delete(id: string) {
    await this.findOne(id);

    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
