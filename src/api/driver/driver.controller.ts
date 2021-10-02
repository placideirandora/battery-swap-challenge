import { Request, Response } from 'express';

import logger from '../../config/winston.config';
import { DriverService } from './driver.service';
import { ResponseHandler } from '../../helpers/response.helper';
import { STATUS_CODES } from '../../constants/status-code.constants';

export class DriverController {
  static async createDriver(req: Request, res: Response) {
    try {
      const city = req.body.city.toLowerCase().trim();
      const sector = req.body.sector.toLowerCase().trim();
      const country = req.body.country.toLowerCase().trim();
      const district = req.body.district.toLowerCase().trim();

      const driver = await DriverService.create({
        ...req.body,
        city,
        sector,
        country,
        district,
      });

      return ResponseHandler.sendResponse(
        res,
        STATUS_CODES.CREATED,
        true,
        'Driver account created',
        driver
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
