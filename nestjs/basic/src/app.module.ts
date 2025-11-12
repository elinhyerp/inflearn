import { MiddlewareConsumer, Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { LoggerMiddleware } from './common/logger.middleware';
import { MypageModule } from './mypage/mypage.module';

@Module({
  imports: [BoardModule, MypageModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
