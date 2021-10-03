import { Order, WhereOptions } from 'sequelize';

import { BatterySwap } from '../../database/models/BatterySwap';
import { IBatterySwap } from 'database/models/interfaces/IBatterySwap';

export class BatterySwapService {
  static async findOne(option: IFindOptions) {
    const batterySwap = await BatterySwap.findOne(option);
    return batterySwap ? (batterySwap.get() as IBatterySwap) : null;
  }

  static async findAll(options?: IFindOptions) {
    const batterySwaps = await BatterySwap.findAll(options);
    return batterySwaps.map((batterySwap) =>
      batterySwap.get()
    ) as IBatterySwap[];
  }

  static async create(model: IBatterySwap): Promise<IBatterySwap> {
    const batterySwap = await BatterySwap.create(model);
    return batterySwap;
  }
}

export interface IFindOptions {
  where?: WhereOptions;
  order?: Order;
  attributes?: string[];
}
