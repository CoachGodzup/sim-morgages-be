import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'node_modules/typeorm/index';

@Entity({ name: 'bank' })
export class BankEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  name: string;
}
