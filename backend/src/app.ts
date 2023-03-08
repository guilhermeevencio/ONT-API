
import express from 'express';
import cors from 'cors'
import appRoutes from './routes/app.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(appRoutes)

app.get('/', (req, res) => res.status(200).json({ message: 'hello world!' }));

export default app