import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { DatabaseService } from 'src/service/database/database.service';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, DatabaseService],
})
export class PlayerModule {}
