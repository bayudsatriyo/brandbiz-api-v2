import modulService from "../services/modulService";
import { Request, Response, NextFunction } from "express";
import path from "path";

class ModulHandler {
    async addModul(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const IdLearning = parseInt(req.params.idLearning)
            const data = req.body
            const image = req.file?.originalname

            const result = await modulService.addModul(IdLearning, data, image)

            res.status(201).json({
                status: 'CREATED',
                data: result
            })
        } catch (e) {
            next(e)
        }
    }

    async getGambarMateri (req: Request, res: Response, next: NextFunction): Promise<void> {
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

    async updateModulHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const data = req.body
            const idModul = parseInt(req.params.idModul)
            const image = req.file?.originalname

            const result = await modulService.updateModul(data, idModul, image)

            res.status(200).json({
                status: 'UPDATED',
                data: result
            })
        } catch (e) {
            next(e)
        }
    }

    async deleteModulHandler(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.idLearning)

            const result = await modulService.deleteModul(id)

            res.status(200).json({
                status: 'DELETED',
                message: `modul ${result.judul} sudah terhapus`
            })
        } catch (e) {
            next(e)
        }
    }
}

export default ModulHandler