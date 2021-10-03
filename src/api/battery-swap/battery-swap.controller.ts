import { Request, Response } from 'express';

import logger from '../../config/winston.config';
import { BatterySwapService } from './battery-swap.service';
import { ResponseHandler } from '../../helpers/response.helper';
import { STATUS_CODES } from '../../constants/status-code.constants';

export class BatteryController {
  /*
    We will charge a driver depending on how many kWh of battery they have used.
    Let's assume to charge 1 USD per 1 kWh. If a battery has 40 kWh, the cost would be 40 USD.
  */
  static async createBatterySwap(req: Request, res: Response) {
    try {
      const batterySwap = await BatterySwapService.create({
        ...req.body,
      });

      batterySwap.dataValues.cost = `${Number(batterySwap.energyUsed) * 1.5} USD`;

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.CREATED,
        true,
        'Battery swap created',
        batterySwap
      );
    } catch (error) {
      const message = 'Something went wrong while creating battery swap';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveBatterySwaps(req: Request, res: Response) {
    try {
      const batterySwaps = await BatterySwapService.findAll();

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Battery swaps retrieved',
        batterySwaps
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the battery swaps';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }

  static async retrieveBatterySwap(req: Request, res: Response) {
    try {
      const { batterySwapId } = req.params;

      const batterySwap = await BatterySwapService.findOne({
        where: { id: batterySwapId },
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Battery swap retrieved',
        batterySwap
      );
    } catch (error) {
      const message =
        'Something went wrong while attempting to retrieve the battery swap';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }
}
