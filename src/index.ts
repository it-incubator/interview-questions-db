import fastify, { RequestGenericInterface } from 'fastify'
import { tasks } from './data/tasks'
import { exams } from './data/exams'

const app = fastify({logger: true})

const PORT =  process.env.PORT || 5000 // TODO: Нужно ли создавать эту переменную

app.get('/exams', (request, reply) => {
  return exams
})

interface GetExamRequest extends RequestGenericInterface {
  Params: {
    id: string
  }
}

app.get<GetExamRequest>('/exams/:id', (request, reply) => {
  const id = request.params.id

  return tasks[id] || reply.status(404).send({
    msg: 'exam not found'
  })
})

app.listen(PORT).catch((error) => {
  app.log.error(error)
  process.exit()
})
