import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['OPEN', 'IN_PROGRESS', 'DONE'], default: 'OPEN' })
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
}