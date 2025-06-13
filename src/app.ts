import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app = express();
app.use(cors());
app.use(morgan('dev'));

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

export default app;