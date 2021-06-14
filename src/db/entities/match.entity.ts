import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'match' })
export class MatchEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  maxTurn: number;
}
