import { exams } from './exams'
import { Question, Questions } from './types/entities'
import { v1 } from 'uuid'
import * as fs from 'fs'
import path from 'path'
import { tasksDirPath } from './data/tasks/tasksDirPath'

export const questions: Questions = {}

const generateQuestionsArray = async  (targetFolderPath: string) => {
  if (!fs.existsSync(targetFolderPath)) {
    return []
  }

  const questionsPromises: any = []
  const questionsFiles = fs.readdirSync(targetFolderPath)

  questionsFiles.forEach(file=>{
    const fileContentPromise = fs.promises.readFile(path.join(targetFolderPath, file))
    questionsPromises.push(fileContentPromise)
  })

  const rawQuestions = await Promise.all(questionsPromises)

  return rawQuestions.map(rowQuestion => {
    const question = JSON.parse(rowQuestion) as Question

    return {
      ...question,
      id: v1(),
      answers: question.answers.map((answer) => ({...answer, id: v1()}))
    }
  })
}

(async function () {
  for (let i = 0; i < exams.length; i++) {
    const targetFolderPath = path.join(
      tasksDirPath,
      exams[i].id
    )
    questions[exams[i].id] = await generateQuestionsArray(targetFolderPath)
  }
})()
