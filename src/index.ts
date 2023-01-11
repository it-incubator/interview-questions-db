import fastify, {RequestGenericInterface} from 'fastify'
import {examsRepository} from './repositories/exams-repository'
import {FastifyListenOptions} from "fastify/types/instance";

const app = fastify({logger: true})
const PORT = Number(process.env.PORT || 5000)

app.get('/api/exams', (request, reply) => {
    const exams = examsRepository.getExams()

    return reply
        .code(200)
        .header('Access-Control-Allow-Origin', '*')
        .send(exams)
})

interface GetExamRequest extends RequestGenericInterface {
    Params: {
        id: string
    }
}

app.get<GetExamRequest>('/api/exams/:id', (request, reply) => {
    const questions = examsRepository.getExamQuestionsById(request.params.id)

    return reply
            .code(200)
            .header('Access-Control-Allow-Origin', '*')
            .send(questions)
        || reply.status(404).send({msg: 'exam not found'})
})

const appSettings: FastifyListenOptions = {
    port: PORT,
    path: '0.0.0.0'
}

app.listen(appSettings).catch((error) => {
    app.log.error(error)
    process.exit()
})
