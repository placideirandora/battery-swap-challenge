import { Order, WhereOptions } from 'sequelize';

import { Station } from '../../database/models/Station';
import { IStation } from 'database/models/interfaces/IStation';

export class StationService {
  static async findOne(option: IFindOptions) {
    const station = await Station.findOne(option);
    return station ? (station.get() as IStation) : null;
  }

  static async findAll(options?: IFindOptions) {
    const stations = await Station.findAll(options);
    return stations.map((station) => station.get()) as IStation[];
  }

  static async create(model: IStation): Promise<IStation> {
    const station = await Station.create(model);
    return station;
  }
}

export interface IFindOptions {
  where?: WhereOptions;
  order?: Order;
  attributes?: string[];
}
