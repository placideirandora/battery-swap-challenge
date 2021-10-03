import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

import { IBattery } from './interfaces/IBattery';

@Table
export class Battery extends Model implements IBattery {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  capacity: string;

  @Column
  voltage: string;

  @Column
  model: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
