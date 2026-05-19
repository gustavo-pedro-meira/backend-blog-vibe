import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CommentModule } from './modules/comment/comment.module';
import { LikeModule } from './modules/like/like.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    CommentModule,
    LikeModule,
    PostModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
