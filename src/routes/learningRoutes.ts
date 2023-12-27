import express from "express";
import LearningHandler from "../handler/learninghandler";
import ModulHandler from "../handler/modulhandler";
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
  const modulController = new ModulHandler()
  const learningRoutes = express.Router()


  // Learning Routes
  learningRoutes.route('/brandbiz/learning').post(upload.single('attachment'), learningController.addLearningHandler).get(learningController.getAllLearningPath)
  learningRoutes.route('/brandbiz/learning/:image').get(learningController.getImage)
  learningRoutes.route('/brandbiz/learning/:idLearning').delete(learningController.deleteLearningpath)
  learningRoutes.route('/brandbiz/learningpath/:idLearning').get(learningController.getLearningPathById)

  // Modul Routes
  learningRoutes.route('/brandbiz/modul/:idLearning').post(modulController.addModul).delete(modulController.deleteModulHandler)
  learningRoutes.route('/brandbiz/modul').put(modulController.updateModulHandler)

  export default learningRoutes