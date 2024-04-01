import express from 'express';
import index from '../route/index.route.js';
import cors from 'cors';

const app = express();
app.use(express.json(), (err, req, res, next) => {
    if (err instanceof Error) {
      next(handleError("Bad request", req.originalUrl, 400));
    }
  });

app.use(express.urlencoded({ extended: true }));

app.use(cors({
  optionsSuccessStatus:200,
  credentials:true,
  methods:['GET',"POST","PATCH"],
  //origin: process.env.CORS_ORIGIN_OPTION?.split(","),
}))

app.use('/api',index)

export default app;