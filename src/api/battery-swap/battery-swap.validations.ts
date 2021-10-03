import { body, param } from 'express-validator';

import { BatterySwapService } from './battery-swap.service';

export class BatterySwapValidation {
  public static batterySwapCreation = [
    body('batteryId', 'batteryId is required and must be a number')
      .isString()
      .trim()
      .notEmpty(),
    body('driverId', 'driverId is required and must be a number')
      .isString()
      .trim()
      .notEmpty(),
    body('stationId', 'stationId is required and must be a number')
      .isString()
      .trim()
      .notEmpty(),
    body('energyUsed', 'energyUsed is required and must be a number. unity of the energy is kWh')
      .isString()
      .trim()
      .notEmpty(),
  ];

  public static batterySwapId = [
    param(
      'batterySwapId',
      'battery swap parameter Id is required and must be a number'
    ).isInt(),
    param('batterySwapId').custom(async (id) => {
      const payment = await BatterySwapService.findOne({ where: { id } });

      if (!payment) {
        return Promise.reject(
          `Battery of the specified Id - ${id} - does not exist`
        );
      }

      return true;
    }),
  ];
}
