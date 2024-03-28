// import cors from 'cors';
import express from 'express';
import index from '../route/index.route.js';

const app = express();
app.use(express.json(), (err, req, res, next) => {
    if (err instanceof Error) {
      next(handleError("Bad request", req.originalUrl, 400));
    }
  });
app.use(express.urlencoded({ extended: true }));


app.use('/api',index)

export default app;