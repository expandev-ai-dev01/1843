import { Request, Response, NextFunction } from 'express';

/**
 * @summary
 * Global error handling middleware.
 * Catches and formats all application errors.
 *
 * @module middleware/errorMiddleware
 */

/**
 * @interface ErrorResponse
 * @description Standard error response format
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code
 * @property {string} error.message - Error message
 * @property {any} error.details - Additional error details
 * @property {string} timestamp - Error timestamp
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @function errorMiddleware
 * @description Express error handling middleware
 *
 * @param {any} err - Error object
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 */
export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
  /**
   * @remarks Log error for debugging
   */
  console.error('Error:', err);

  /**
   * @remarks Determine status code
   */
  const statusCode = err.statusCode || err.status || 500;

  /**
   * @remarks Build error response
   */
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message: err.message || 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
    timestamp: new Date().toISOString(),
  };

  res.status(statusCode).json(errorResponse);
}
