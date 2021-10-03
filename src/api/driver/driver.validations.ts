import { body, param } from 'express-validator';

import { DriverService } from './driver.service';

export class DriverValidation {
  public static driverCreation = [
    body('firstName', 'firstName is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('lastName', 'lastName is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('country', 'country is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('city', 'city is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('district', 'district is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('sector', 'sector is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
    body('nationalId', 'nationalId is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
  ];

  public static driverId = [
    param(
      'driverId',
      'driver parameter Id is required and must be a number'
    ).isInt(),
    param('driverId').custom(async (id) => {
      const driver = await DriverService.findOne({ where: { id } });

      if (!driver) {
        return Promise.reject(
          `Driver of the specified Id - ${id} - does not exist`
        );
      }

      return true;
    }),
  ];
}
