import { Router } from 'express';

import { driverRouter } from './driver';
import { batteryRouter } from './battery';
import { stationRouter } from './station';
import { batterySwapRouter } from './battery-swap';

export const indexRouter = Router();

indexRouter.use('/driver', driverRouter);
indexRouter.use('/battery', batteryRouter);
indexRouter.use('/station', stationRouter);
indexRouter.use('/battery-swap', batterySwapRouter);


