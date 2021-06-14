import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'turn' })
export class TurnEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  match: string;
  @Column()
  turnNumber: number;
  @Column()
  euribor: number;
}
