import { Order, WhereOptions } from 'sequelize';

import { Battery } from '../../database/models/Battery';
import { IBattery } from 'database/models/interfaces/IBattery';

export class BatteryService {
  static async findOne(option: IFindOptions) {
    const battery = await Battery.findOne(option);
    return battery ? (battery.get() as IBattery) : null;
  }

  static async findAll(options?: IFindOptions) {
    const batteries = await Battery.findAll(options);
    return batteries.map((battery) => battery.get()) as IBattery[];
  }

  static async create(model: IBattery): Promise<IBattery> {
    const battery = await Battery.create(model);
    return battery;
  }
}

export interface IFindOptions {
  where?: WhereOptions;
  order?: Order;
  attributes?: string[];
}
