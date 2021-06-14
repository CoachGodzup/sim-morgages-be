import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './service/database/database.service';
import { PlayerController } from './controller/player/player.controller';
import { MatchModule } from './match/match.module';

@Module({
  imports: [MatchModule],
  controllers: [AppController, PlayerController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
