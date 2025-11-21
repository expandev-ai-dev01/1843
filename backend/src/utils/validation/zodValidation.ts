import { z } from 'zod';

/**
 * @summary
 * Zod validation utilities.
 * Provides reusable validation schemas and helpers.
 *
 * @module utils/validation/zodValidation
 */

/**
 * @remarks String validation helpers
 */
export const zString = z.string().min(1);
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @remarks Email validation
 */
export const zEmail = z.string().email().max(255);

/**
 * @remarks Name validation
 */
export const zName = z.string().min(1).max(200);

/**
 * @remarks Description validation
 */
export const zDescription = z.string().max(500);
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @remarks Numeric validation helpers
 */
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive();
export const zNonNegativeNumber = z.number().min(0);

/**
 * @remarks ID validation
 */
export const zId = z.coerce.number().int().positive();
export const zNullableId = z.coerce.number().int().positive().nullable();

/**
 * @remarks Boolean validation
 */
export const zBit = z.coerce.number().int().min(0).max(1);
export const zBoolean = z.boolean();

/**
 * @remarks Date validation
 */
export const zDate = z.coerce.date();
export const zDateString = z.string().datetime();

/**
 * @remarks Password validation
 */
export const zPassword = z.string().min(8).max(100);
