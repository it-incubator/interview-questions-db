import fastify, { RequestGenericInterface } from 'fastify'
import { questions } from './data/questions'
import { exams } from './data/exams'
import { shuffleArray } from './utils/shuffle-array'

const app = fastify({logger: true})
const PORT =  process.env.PORT || 5000 // TODO: Нужно ли создавать эту переменную

app.get('/exams', (request, reply) => {
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
  const id = request.params.id

  return reply
    .code(200)
    .header('Access-Control-Allow-Origin', '*')
    .send(shuffleArray(questions[id]).slice(0, 10))
    || reply.status(404).send({msg: 'exam not found'})
})

app.listen(PORT).catch((error) => {
  app.log.error(error)
  process.exit()
})
