/**
 * @summary
 * Error response utility.
 * Provides standardized error response format.
 *
 * @module utils/response/errorResponse
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
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @function errorResponse
 * @description Creates a standardized error response
 *
 * @param {string} message - Error message
 * @param {string} code - Error code
 * @param {any} details - Additional error details
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * const response = errorResponse('User not found', 'USER_NOT_FOUND');
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
