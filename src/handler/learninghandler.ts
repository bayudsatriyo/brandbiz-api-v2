import learningService from "../services/learningService";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

import path from "path";
import { type Response, type Request, type NextFunction } from 'express'

class LearningHandler {
    async addLearningHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { judul } = req.body;
            const filename = req.file;

            console.log(judul)
            console.log(filename)

            const result = await learningService.addLearning(judul, filename?.originalname)

            res.status(201).json({
                status: 'CREATED',
                data: result
            })
        } catch (e) {
            next(e)
        }
    }

    async getImage (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const image = req.params.image
            console.log(image)
            // const __dirname = dirname();

            const filePath = path.join(__dirname, '..', 'uploads', image);
            res.sendFile(filePath)
        } catch (e) {
            next(e)
        }
    }

    async getAllLearningPath (_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const dataLearning = await learningService.getAllLearningpath()

            res.status(200).json({
                data: dataLearning
            })
        } catch (e) {
            next(e)
        }
    }

    async deleteLearningpath(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.idLearning)
            
            const judul: string = await learningService.deleteLearningPath(id)

            res.status(200).json({
                status: 'DELETED',
                message: `Learning path ${judul} telah dihapus`
            })
        } catch (e) {
            next(e)
        }
    }
}

export default LearningHandler