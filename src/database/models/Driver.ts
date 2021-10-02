import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

import { IDriver } from './interfaces/IDriver';

@Table
export class Driver extends Model implements IDriver {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  country: string;

  @Column
  city: string;

  @Column
  district: string;

  @Column
  sector: string;

  @Column
  nationalId: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
