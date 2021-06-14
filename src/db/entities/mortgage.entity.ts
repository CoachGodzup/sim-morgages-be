import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'mortgage' })
export class MortgageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  turn: number;
  @Column()
  bank: string;
  @Column()
  name: string;
}
