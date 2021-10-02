import { Router } from 'express';

import { DriverController } from './driver.controller';

export const driverRouter = Router();

driverRouter.post('/', DriverController.createPayment);
