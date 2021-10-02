import { Order, WhereOptions } from 'sequelize';

import { Driver } from '../../database/models/Driver';
import { IDriver } from 'database/models/interfaces/IDriver';

export class DriverService {
  static async findOne(option: IFindOptions) {
    const driver = await Driver.findOne(option);
    return driver ? (driver.get() as IDriver) : null;
  }

  static async findAll(options?: IFindOptions) {
    const drivers = await Driver.findAll(options);
    return drivers.map((driver) => driver.get()) as IDriver[];
  }

  static async create(model: IDriver): Promise<IDriver> {
    const driver = await Driver.create(model);
    return driver;
  }
}

export interface IFindOptions {
  where?: WhereOptions;
  order?: Order;
  attributes?: string[];
}
