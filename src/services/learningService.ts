import validate from "../validations/validate";
import learningValidation from "../validations/learningValidation";
import prismaClient from "../applications/database";

interface learningpath {
    judul: string,
    imageUrl: string,
}

const addLearning = async (judulLearning: string, filename: string | undefined): Promise<learningpath> => {
    const judul = validate(learningValidation.addLearningValidation, judulLearning)
    const fileData = validate(learningValidation.addLearningValidation, filename)

    const Learningdata = await prismaClient.learningpath.create({
        data: {
            judul: judul,
            imageUrl: `http://localhost:8080/brandbiz/learning/${fileData}`
        }
    })

    return Learningdata as learningpath
}

export default { addLearning }
