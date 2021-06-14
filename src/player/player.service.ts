import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/service/database/database.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerEntity } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(private readonly db: DatabaseService) {}

  private query() {
    return this.db.connect().from<PlayerEntity>('player');
  }
  create(createPlayerDto: CreatePlayerDto) {
    return this.query().insert(createPlayerDto);
  }

  findAll() {
    return this.query().select('*');
  }

  findOne(uuid: string) {
    return this.query().select('*').filter('id', 'eq', uuid);
  }

  findInMatch(matchUuid: string) {
    return this.query().select('*').filter('match', 'eq', matchUuid);
  }

  update(uuid: string, updatePlayerDto: UpdatePlayerDto) {
    return this.query().upsert({
      ...updatePlayerDto,
      id: uuid,
    });
  }

  remove(uuid: string) {
    return this.query().delete().match({ id: uuid });
  }
}
