import { Request,Response, NextFunction } from "express";
import { getPostsServices } from "../services/getPostServices";

const getPosts = async (req:Request, res:Response,next:NextFunction):Promise<Response | void> =>{
    try{
        const posts = await getPostsServices(req);
        res.status(200).json(posts)
    }catch (error){
        console.log(error)
    };
}; 

export {getPosts};