import { body } from 'express-validator';

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
}
