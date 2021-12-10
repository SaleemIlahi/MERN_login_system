
const express = require('express')
const dotenv = require('dotenv')
const connectdb = require('./db/connectdb.js')
const router = require('./routes/user_Routes.js')
const cookieParser = require('cookie-parser') 
const cors = require('cors')
const app = express()
const path = require('path')
dotenv.config({path: './config.env'})

app.use(cors())

// Connecting DATABASE
connectdb()

// Json Format
app.use(express.json())

// Cookies
app.use(cookieParser())

// Loading Router modules
app.use('/',router)

// Serve static file in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join("client/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client","build", "index.html"));
    });
  }
  

const port = process.env.PORT || 8000
app.listen(port , () => console.log(`Server Listening at http://localhost:${port}`))