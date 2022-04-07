import {Request} from "express";
import axios from "axios";

const getPostsServices = async (req:Request)=> {
//En esta linea estoy guardando en la variable la url para pegarle a la api
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const {data} = await axios.get(url).catch((err) => {
        err.origin = "Error getting Posts";
        throw err;

    });
    return data;

}

export {getPostsServices};