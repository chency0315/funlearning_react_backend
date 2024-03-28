import contactUsRouter from "./contactUs.route.js";
import express from 'express';
const router = express.Router();
const port = process.env.PORT||3000;
router.get('/',(req,res)=>{
  res.send(`此路徑是: localhost:${port}/api`);
})
router.use('/contactUs',contactUsRouter);
export default [
  router,
];