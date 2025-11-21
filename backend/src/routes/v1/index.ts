import { Router } from 'express';
import externalRoutes from './externalRoutes';
import internalRoutes from './internalRoutes';

/**
 * @summary
 * V1 API router configuration.
 * Separates external (public) and internal (authenticated) routes.
 *
 * @module routes/v1
 */

const router = Router();

/**
 * @remarks External (public) routes - /api/v1/external/...
 */
router.use('/external', externalRoutes);

/**
 * @remarks Internal (authenticated) routes - /api/v1/internal/...
 */
router.use('/internal', internalRoutes);

export default router;
