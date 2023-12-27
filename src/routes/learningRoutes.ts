import express from "express";
import LearningHandler from "../handler/learninghandler";
import multer from 'multer'
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void
type FilenameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination(_req: Request, _file: Express.Multer.File, cb: DestinationCallback) {
      cb(null, 'src/uploads');
    },
    filename(_req: Request, file: Express.Multer.File, cb: FilenameCallback) {
      cb(null, `${file.originalname}`);
    },
  });
  
  const upload = multer({ storage : storage });

  const learningController = new LearningHandler()
  const learningRoutes = express.Router()

  learningRoutes.route('/brandbiz/learning').post(upload.single('attachment'), learningController.addLearningHandler)
  learningRoutes.route('/brandbiz/learning/:image').get(learningController.getImage)
  export default learningRoutes