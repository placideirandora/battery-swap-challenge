import { Router } from 'express';

import { driverRouter } from './driver';

export const indexRouter = Router();

indexRouter.use('/driver', driverRouter);
