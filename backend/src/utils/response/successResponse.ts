/**
 * @summary
 * Success response utility.
 * Provides standardized success response format.
 *
 * @module utils/response/successResponse
 */

/**
 * @interface SuccessResponse
 * @description Standard success response format
 *
 * @property {boolean} success - Always true for success
 * @property {T} data - Response data
 * @property {object} metadata - Optional metadata
 * @property {number} metadata.page - Current page number
 * @property {number} metadata.pageSize - Items per page
 * @property {number} metadata.total - Total items
 * @property {string} metadata.timestamp - Response timestamp
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @function successResponse
 * @description Creates a standardized success response
 *
 * @param {T} data - Response data
 * @param {object} metadata - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * const response = successResponse({ id: 1, name: 'User' });
 */
export function successResponse<T>(
  data: T,
  metadata?: Partial<SuccessResponse<T>['metadata']>
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}
