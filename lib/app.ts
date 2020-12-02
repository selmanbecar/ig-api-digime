import express from "express"
import userRouter from "./routes/userRouter";
import mediaRouter from "./routes/mediaRouter";
import endpoint from './models/config'

const app = express()


//envirements variable for port
const port: any = process.env.PORT || endpoint.port

//using two route media and user
app.use("/media", mediaRouter)
app.use("/", userRouter)


//Adding server to port
app.listen(process.env.PORT || endpoint.port, () => {
    console.log("server is listen on port "+ endpoint.port +"")
})


