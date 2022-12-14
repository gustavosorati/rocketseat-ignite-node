import express from 'express';
import { createCourse } from './routes';

const PORT = 3333;
const app = express();

app.get('/', createCourse);

app.listen(PORT, () => console.log('Server is running'));
