import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { IsEmail, IsNotEmpty, Length, validateOrReject } from 'class-validator';

import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Length(2, 50)
  firstName: string;

  @Column()
  @Length(2, 50)
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  emailAddress: string;

  @CreateDateColumn()
  registeredOn: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }

  @BeforeInsert()
  updateDates() {
    this.registeredOn = new Date();
  }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
