import express from 'express';

import userRoutes from './user.routes';

import symptomRoutes from './symptom.routes';
import resultDeclarationRoutes from './result-declaration.routes';
import healthDeclarationTypeRoutes from './healthDeclarationType.routes';
import epidemiologicalFactorsRoutes from './epidemiological_factor.routes';

const router = express.Router();


router.use('/user/', userRoutes);

router.use('/symptoms/', symptomRoutes);

router.use('/epidemiological-factors/', epidemiologicalFactorsRoutes);

router.use('/result-declaration/', resultDeclarationRoutes);

router.use('/health-declaration-types/', healthDeclarationTypeRoutes);

export default router;
