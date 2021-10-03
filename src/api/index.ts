import { Router } from 'express';

import { driverRouter } from './driver';
import { batteryRouter } from './battery';

export const indexRouter = Router();

indexRouter.use('/driver', driverRouter);
indexRouter.use('/battery', batteryRouter);

