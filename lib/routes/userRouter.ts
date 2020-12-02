import request from "request"
import express from "express"
import { Router } from 'express'
import endpoint from '../models/config'
const app = express()



 const userRouter = Router()
userRouter.get("/", (req: any, res: any) => {
    
    const url = 'https://graph.instagram.com/'+ endpoint.user_id +'/?access_token='+ endpoint.token +'&fields=account_type,media_count,username'
    request({ url: url, json: true }, (error: string, response: any) => {
       if(error){

           res.send("unable to connect to service")
       }else{
           
        res.status(200).send("USER " + response.body.username + " HAVE " + response.body.media_count + " POSTS")
        
       }
   

    })
    
    
})
export default userRouter
