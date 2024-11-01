import app from './config/express.js';

// const port = process.env.PORT;
const port = 3000
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
app.get('/',(req,res)=>{
    res.send(`This server is running at http://localhost:${port}`)
})
export default app;