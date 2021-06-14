import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './service/database/database.service';
import { MatchModule } from './match/match.module';
import { PlayerModule } from './player/player.module';
import { GameService } from './service/game/game.service';

@Module({
  imports: [MatchModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService, GameService],
})
export class AppModule {}
