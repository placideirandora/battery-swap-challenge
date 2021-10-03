import { Request, Response } from 'express';

import logger from '../../config/winston.config';
import { BatteryService } from './battery.service';
import { ResponseHandler } from '../../helpers/response.helper';
import { STATUS_CODES } from '../../constants/status-code.constants';

export class BatteryController {
  static async createBattery(req: Request, res: Response) {
    try {
      const battery = await BatteryService.create({
        ...req.body,
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.CREATED,
        true,
        'Battery created',
        battery
      );
    } catch (error) {
      const message = 'Something went wrong while creating battery';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveBatteries(req: Request, res: Response) {
    try {
      const batteries = await BatteryService.findAll();

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Batteries retrieved',
        batteries
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the batteries';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveBattery(req: Request, res: Response) {
    try {
      const { batteryId } = req.params;

      const battery = await BatteryService.findOne({
        where: { id: batteryId },
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Battery retrieved',
        battery
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the battery';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }
}
