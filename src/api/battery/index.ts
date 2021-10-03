import { Router } from 'express';

import { BatteryController } from './battery.controller';
import { BatteryValidation } from './battery.validations';
import { validate } from '../../middleware/validation.middleware';

export const batteryRouter = Router();

batteryRouter.post(
  '/',
  validate(BatteryValidation.batteryCreation),
  BatteryController.createBattery
);

batteryRouter.get('/', BatteryController.retrieveBatteries);

batteryRouter.get(
  '/:batteryId',
  validate(BatteryValidation.batteryId),
  BatteryController.retrieveBattery
);
