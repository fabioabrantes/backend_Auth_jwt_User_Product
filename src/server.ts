import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import 'express-async-errors';

import { routes } from './routes';
import { exceptionsHandle } from './middlewares/handleExceptions';

dotenv.config();

const app = express();
//middleware
app.use(express.json());
app.use(cors());

app.use(routes);
app.use(exceptionsHandle);


app.listen(3333,() => {
  console.log('server on port 3333')
});
