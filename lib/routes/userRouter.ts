
//imports
import request from "request"
import express from "express"
import { Router } from 'express'
import endpoint from '../models/config'
const app = express()



 const userRouter = Router()
 //get method
userRouter.get("/", (req: any, res: any) => {
    //geting data from url https://graph.instagram.com
    const url = 'https://graph.instagram.com/'+ endpoint.user_id +'/?access_token='+ endpoint.token +'&fields=account_type,media_count,username'
    request({ url: url, json: true }, (error: string, response: any) => {
       if(error){

           res.send("unable to connect to service")
       }else{
           //send to page json body
        res.status(200).send(response.body)
        
       }
   

    })
    
    
})
//export user rout
export default userRouter
