import { Request, Response } from 'express';

import logger from '../../config/winston.config';
import { ResponseHandler } from '../../helpers/response.helper';
import { STATUS_CODES } from '../../constants/status-code.constants';

export class DriverController {
  static async createPayment(req: Request, res: Response) {
    try {
      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.OK,
        true,
        'Ready to serve you'
      );
    } catch (error) {
      const message = 'Something went wrong while creating driver account';

      logger.error(`${message}: ${error.message}`);

      return ResponseHandler.sendErrorResponse(res, {
        message,
        error: error.message,
      });
    }
  }
}
