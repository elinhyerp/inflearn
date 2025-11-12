import { Module } from '@nestjs/common';
import { MypageModule } from 'src/mypage/mypage.module';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  imports: [MypageModule],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [BoardService],
})
export class BoardModule {}
