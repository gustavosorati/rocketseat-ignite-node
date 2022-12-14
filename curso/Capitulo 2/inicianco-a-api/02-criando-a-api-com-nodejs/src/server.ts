import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(categoriesRoutes);

app.listen(PORT, () => console.log('Server is running'));
