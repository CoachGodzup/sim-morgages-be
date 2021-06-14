import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/service/database/database.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchEntity } from './entities/match.entity';

@Injectable()
export class MatchService {
  constructor(private readonly db: DatabaseService) {}

  private query() {
    return this.db.connect().from<MatchEntity>('match');
  }

  create(createMatchDto: CreateMatchDto) {
    return this.query().insert(createMatchDto);
  }

  findAll() {
    return this.query().select('*');
  }

  findOne(uuid: string) {
    return this.query().select('*').filter('id', 'eq', uuid);
  }

  update(uuid: string, updateMatchDto: UpdateMatchDto) {
    return this.query().upsert({
      ...updateMatchDto,
      id: uuid,
    });
    // .select('*')
    //.filter('id', 'eq', uuid)
    // `This action updates a #${id} match`;
  }

  remove(uuid: string) {
    return this.query().delete().match({ id: uuid });
  }
}
