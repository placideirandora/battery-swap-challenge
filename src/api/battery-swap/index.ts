import { Router } from 'express';

import { BatteryController } from './battery-swap.controller';
import { BatterySwapValidation } from './battery-swap.validations';
import { validate } from '../../middleware/validation.middleware';

export const batterySwapRouter = Router();

batterySwapRouter.post(
  '/',
  validate(BatterySwapValidation.batterySwapCreation),
  BatteryController.createBatterySwap
);

batterySwapRouter.get('/', BatteryController.retrieveBatterySwaps);

batterySwapRouter.get(
  '/:batterySwapId',
  validate(BatterySwapValidation.batterySwapId),
  BatteryController.retrieveBatterySwap
);