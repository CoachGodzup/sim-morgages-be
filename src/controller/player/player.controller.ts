import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Query,
  Param,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { PlayerEntity } from 'src/db/entities/player.entity';
import { DatabaseService } from 'src/service/database/database.service';

@Controller('player')
export class PlayerController {
  private db: SupabaseClient;

  constructor(private readonly dbService: DatabaseService) {
    this.db = dbService.connect();
  }

  private doQuery = async (query) => {
    const { data, error } = await this.db
      .from<PlayerEntity>('player')
      .select(query);
    if (error) {
      throw error;
    }
    return data;
  };

  @Get('get/all')
  async getAll() {
    return this.doQuery('*');
  }

  @Get('get/:id')
  async getByMatchId(@Param('id') match: string) {
    const { data, error } = await this.db
      .from<PlayerEntity>('player')
      .select('*')
      .filter('match', 'eq', match);
    if (error) {
      throw error;
    }
    return data;
  }

  // @Post('new')
  // @Patch('update')
  // @Delete('delete')
}
