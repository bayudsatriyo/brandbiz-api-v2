import validate from "../validations/validate";
import learningValidation from "../validations/learningValidation";
import prismaClient from "../applications/database";
import { Learningpath } from "@prisma/client";

interface learningpath {
    judul: string,
    imageUrl: string,
}

const addLearning = async (judulLearning: string, filename: string | undefined): Promise<learningpath> => {
    const judul = validate(learningValidation.addLearningValidation, judulLearning)
    if(filename === undefined){
        const Learningdata = await prismaClient.learningpath.create({
            data: {
                judul: judul,
                imageUrl: "no image"
            }
        })

        return Learningdata as learningpath
    }
    const fileData = validate(learningValidation.addLearningValidation, filename)

    const Learningdata = await prismaClient.learningpath.create({
        data: {
            judul: judul,
            imageUrl: `http://localhost:8080/brandbiz/learning/${fileData}`
        }
    })

    return Learningdata as learningpath
}


const getAllLearningpath = async (): Promise<Learningpath[]> => {
    const dataLearningPath = await prismaClient.learningpath.findMany()

    return dataLearningPath
}

const deleteLearningPath = async (id: number): Promise<string> => {
    const idlearning = validate(learningValidation.idLearningpath, id)

    const judul = await prismaClient.learningpath.delete({
        where: {
            id: idlearning
        },
        select: {
            judul: true
        }
    })

    return judul.judul
}

export default { addLearning, getAllLearningpath, deleteLearningPath }
