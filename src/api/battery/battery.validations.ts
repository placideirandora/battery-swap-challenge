import { body, param } from 'express-validator';

import { BatteryService } from './battery.service';

export class BatteryValidation {
  public static batteryCreation = [
    body('name', 'name is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('capacity', 'capacity is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('model', 'model is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('voltage', 'voltage is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
  ];

  public static batteryId = [
    param(
      'batteryId',
      'battery parameter Id is required and must be a number'
    ).isInt(),
    param('batteryId').custom(async (id) => {
      const battery = await BatteryService.findOne({ where: { id } });

      if (!battery) {
        return Promise.reject(
          `Battery of the specified Id - ${id} - does not exist`
        );
      }

      return true;
    }),
  ];
}
