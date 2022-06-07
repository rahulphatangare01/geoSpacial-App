require('dotenv').config();
const express = require('express');
const app =express();
const cors = require('cors');
const connection = require('./db')
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth')
// const studentRoutes = require('./routes/studentdata')

//  database
connection()

//  middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users",userRoutes);
app.use("/api/users",authRoutes);
// app.use("/api/student ", studentRoutes)
app.use('/api/student',require('./routes/studentdata'))

const port = process.env.port || 8010;
app.listen(port,() =>{
    console.log(`server running at port ${port}`)
})