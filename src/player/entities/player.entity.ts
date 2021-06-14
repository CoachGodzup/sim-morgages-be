import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'player' })
export class PlayerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nickname: string;
  @Column()
  match: string;
}
