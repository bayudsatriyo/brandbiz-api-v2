import modulService from "../services/modulService";
import { Request, Response, NextFunction } from "express";

class ModulHandler {
    async addModul(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const IdLearning = parseInt(req.params.idLearning)
            const JudulModul = req.body.judul

            const result = await modulService.addModul(IdLearning, JudulModul)

            res.status(201).json({
                status: 'CREATED',
                data: result
            })
        } catch (e) {
            next(e)
        }
    }

    async updateModulHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const judulModul = req.body.judul
            const idModul = parseInt(req.body.id)

            const result = await modulService.updateModul(judulModul, idModul)

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