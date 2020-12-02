import request from "request"
import express from "express"
import { Router } from 'express'
import { Post } from "../models/Post"
import endpoint from '../models/config'
const app = express()

 const mediaRouter = Router()

 mediaRouter.get("/", (req: any, res: any) => {
    
    const url = 'https://graph.instagram.com/'+ endpoint.user_id +'/media?fields=id,media_url,timestamp&access_token='+endpoint.token+''
    request({ url: url, json: true }, (error: string, response: any) => {
       if(error){
        
           res.send("unable to connect to service")
       }else{
        
                const array = response.body.data;

                var Posts: Post[] = [];
                                
                array.forEach(function (obj: any) {
                    Posts.push(new Post(obj.media_url, obj.timestamp))  
                });
            
                res.send(Posts.reverse());
            }
    }) 
})
export default mediaRouter