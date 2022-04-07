
import express, {Request, Response} from "express";
import cors from "cors";
import swagger from "../../swagger";
import photos from "../rutas/photos";
import posts from "../rutas/posts";

//Aca guardo la ejecucion de express en la variable
const server = express();

server.use(express.json());
server.use(cors());
server.get("/",(req: Request, res:Response)=> res.send("Carlos Neme's challenge is up"));
server.use("/api/photos");
server.use("/api/posts");


swagger("/swagger",server);

export default server;
