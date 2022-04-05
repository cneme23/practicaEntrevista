import express from "express";
import {getPhotos} from "../controllers/getPhotos";

const router = express.Router();
router.get("/",getPhotos);

export default router;