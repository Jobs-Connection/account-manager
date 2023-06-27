import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column()
  id_address: string;

  @Column()
  name: string;

  @Column()
  tax_id: string;

  @Column()
  password: string;

  @Column()
  course: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  createdAt: string;

  @Column({ default: true })
  updatedAt: string;
}