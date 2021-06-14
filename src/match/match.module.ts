import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { DatabaseService } from 'src/service/database/database.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService, DatabaseService],
})
export class MatchModule {}
