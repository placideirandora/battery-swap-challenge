import { Router } from 'express';

import { DriverController } from './driver.controller';
import { DriverValidation } from './driver.validations';
import { validate } from '../../middleware/validation.middleware';

export const driverRouter = Router();

driverRouter.post(
  '/',
  validate(DriverValidation.driverCreation),
  DriverController.createDriver
);
