import { Request,Response, NextFunction } from "express";
import { getPhotosService } from "../services/getPhotosServices";

const getPhotos = async (req:Request, res:Response,next:NextFunction):Promise<Response | void> =>{
    try{
        const photos = await getPhotosService(req);
        res.status(200).json(photos)
    }catch (error){
        console.log(error)
    };
}; 

export {getPhotos};