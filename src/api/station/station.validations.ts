import { body, param } from 'express-validator';

import { StationService } from './station.service';

export class StationValidation {
  public static stationCreation = [
    body('name', 'name is required and must be a string')
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
    body('location', 'location is required and must be a string')
      .isString()
      .trim()
      .notEmpty(),
  ];

  public static stationId = [
    param(
      'stationId',
      'station parameter Id is required and must be a number'
    ).isInt(),
    param('stationId').custom(async (id) => {
      const station = await StationService.findOne({ where: { id } });

      if (!station) {
        return Promise.reject(
          `Station of the specified Id - ${id} - does not exist`
        );
      }

      return true;
    }),
  ];
}
