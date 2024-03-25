const express = require('express');
const app = express()

// app.get("/api/contact",(req,res)=>{
//     res.json({"name":["userOne"]})
// })
// app.listen(5000,()=>{console.log("Server started on port 5000")})

const appRoute = require('./src/routes/route.js')
const PORT = process.env.PORT || 5000;

//middleware to parse json
app.use(express.json())

app.use('/api',appRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})