import express from 'express';
import carRoutes from './routes/carRoutes';
import motorcyclesRoutes from './routes/motorcycleRoutes';

const app = express();
app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcyclesRoutes);

export default app;
