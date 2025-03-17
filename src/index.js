const express  = require("express")
const {PORT} = require("./config/serverConfig")
const  bodyParser = require("body-parser")


const serverStart = async()=>{

    const app = express();

    // middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( { extended:true }))

    app.listen(process.env.PORT, ()=>{
        console.log(`Server Running at PORT: ${PORT}`)
    })
}

serverStart()