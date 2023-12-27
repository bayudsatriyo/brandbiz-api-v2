import validate from "../validations/validate";
import modulValidations from "../validations/modulValidations";
import prismaClient from "../applications/database";
import { Modul } from "@prisma/client";
import learningValidation from "../validations/learningValidation";
import ResponseError from "../exceptions/ResponseError";

const addModul = async (idLearning: number | undefined, judul: string): Promise<Modul> => {
    const judulModul = await validate(modulValidations.judulModulValidation, judul)
    const IdLearning = validate(learningValidation.idLearningpath, idLearning)

    const cekLearning = await prismaClient.learningpath.count({
        where: {
            id: IdLearning
        }
    })

    if(!cekLearning){
        throw new ResponseError(404, 'Learning Path tidak ditemukan')
    }

    const cekModul = await prismaClient.modul.count({
        where: {
            judul: judulModul
        }
    })

    if(cekModul === 1){
        throw new ResponseError(403, 'Judul modul sudah ada, silahkan ganti judul lain')
    }

    
    const addModul = await prismaClient.modul.create({
        data: {
            judul: judulModul,
            learning_id: IdLearning
        },
    })

    return addModul as Modul
}

const updateModul = async (judul: string, idmodul: number) => {
    const judulModul = validate(modulValidations.judulModulValidation, judul)
    const idModul = validate(learningValidation.idLearningpath, idmodul)

    const cekModul = await prismaClient.modul.count({
        where: {
            id: idModul
        }
    })

    if(!cekModul){
        throw new ResponseError(404, 'id tidak ditemukan')
    }

    return prismaClient.modul.update({
        where: {
            id: idModul
        },
        data: {
            judul: judulModul
        }
    })
}

const deleteModul = async (id: number) => {
    const idModul = validate(learningValidation.idLearningpath, id)

    const cekModul = await prismaClient.modul.count({
        where: {
            id: idModul
        }
    })

    if(!cekModul){
        throw new ResponseError(404, 'id tidak ditemukan')
    }

    return prismaClient.modul.delete({
        where: {
            id: idModul
        },
        select: {
            judul: true
        }
    })
}

export default { addModul, updateModul, deleteModul }