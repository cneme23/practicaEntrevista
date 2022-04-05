import { Request   } from "express";
import axios from "axios";

const getPhotosService = async (req:Request) => {
    //Aca defino la url a la cual le voy a pegar
    const url = "https://jsonplaceholder.typicode.com/photos";
    
    const {data} = await axios.get(url).catch((err) =>{
        err.origin = "Error al obtener las fotos";
        throw err;
    } );

    return data

}

export {getPhotosService};