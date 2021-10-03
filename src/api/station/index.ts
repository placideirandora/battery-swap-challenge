import { Router } from 'express';

import { StationController } from './station.controller';
import { StationValidation } from './station.validations';
import { validate } from '../../middleware/validation.middleware';

export const stationRouter = Router();

stationRouter.post(
  '/',
  validate(StationValidation.stationCreation),
  StationController.createStation
);

stationRouter.get('/', StationController.retrieveStations);

stationRouter.get(
  '/:stationId',
  validate(StationValidation.stationId),
  StationController.retrieveStation
);
