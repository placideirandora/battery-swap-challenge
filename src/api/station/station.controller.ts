import { Request, Response } from 'express';

import logger from '../../config/winston.config';
import { StationService } from './station.service';
import { ResponseHandler } from '../../helpers/response.helper';
import { STATUS_CODES } from '../../constants/status-code.constants';

export class StationController {
  static async createStation(req: Request, res: Response) {
    try {
      const city = req.body.city.toLowerCase().trim();
      const country = req.body.country.toLowerCase().trim();
      const location = req.body.location.toLowerCase().trim();

      const station = await StationService.create({
        ...req.body,
        city,
        country,
        location,
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.CREATED,
        true,
        'Station created',
        station
      );
    } catch (error) {
      const message = 'Something went wrong while creating station';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveStations(req: Request, res: Response) {
    try {
      const stations = await StationService.findAll();

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Stations retrieved',
        stations
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the stations';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveStation(req: Request, res: Response) {
    try {
      const { stationId } = req.params;

      const station = await StationService.findOne({
        where: { id: stationId },
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Station retrieved',
        station
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the station';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }
}
