import { Request, Response } from 'express';

/**
 * @summary
 * 404 Not Found middleware.
 * Handles requests to non-existent routes.
 *
 * @module middleware/notFoundMiddleware
 */

/**
 * @function notFoundMiddleware
 * @description Handles 404 errors for undefined routes
 *
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 *
 * @returns {void}
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
      path: req.path,
      method: req.method,
    },
    timestamp: new Date().toISOString(),
  });
}
