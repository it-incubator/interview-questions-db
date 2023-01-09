import fastify, { RequestGenericInterface } from 'fastify'
import { examsRepository } from './repositories/exams-repository'

const app = fastify({logger: true})
const PORT =  process.env.PORT || 5000

app.get('/exams', (request, reply) => {
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

app.get<GetExamRequest>('/exams/:id', (request, reply) => {
  const questions = examsRepository.getExamQuestionsById(request.params.id)

  return reply
    .code(200)
    .header('Access-Control-Allow-Origin', '*')
    .send(questions)
    || reply.status(404).send({msg: 'exam not found'})
})

app.listen(PORT).catch((error) => {
  app.log.error(error)
  process.exit()
})
