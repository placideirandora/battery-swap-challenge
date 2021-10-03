import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  ForeignKey,
  AutoIncrement,
} from 'sequelize-typescript';

import { Driver } from './Driver';
import { Battery } from './Battery';
import { Station } from './Station';
import { IBatterySwap } from './interfaces/IBatterySwap';

@Table
export class BatterySwap extends Model implements IBatterySwap {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Battery)
  @Column
  batteryId: number;

  @ForeignKey(() => Driver)
  @Column
  driverId: number;

  @ForeignKey(() => Station)
  @Column
  stationId: number;

  @Column
  energyUsed: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
