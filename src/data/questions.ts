import { exams } from './exams'
import { Questions, QuestionType } from '../types/entities'
import { v1 } from 'uuid'
import * as fs from 'fs'
import path from 'path'
import { tasksDirPath } from './tasks/tasksDirPath'

const generateQuestionsArray = async  (targetFolderPath: string) => {
  const questionsPromises: any = []
  const questionsFiles = fs.readdirSync(targetFolderPath)
  questionsFiles.forEach(file=>{
    const fileContentPromise = fs.promises.readFile(path.join(targetFolderPath, file))
    questionsPromises.push(fileContentPromise)
  })
  const rawQuestions = await Promise.all(questionsPromises)

  return rawQuestions.map(question => {
    return JSON.parse(question)
  })

  //   const questions: any = []
  // fs.readdir(path.join(__dirname, 'tasks', id), (err, files) => {
  //
  //   files.forEach(file => {
  //     fs.readFile(path.join(__dirname, 'tasks', id, file), (error, data) => {
  //       const obj = JSON.parse(data.toString())
  //       const question = {
  //         ...obj,
  //         id: v1(),
  //         answers: obj.answers.map((answer: any) => ({
  //           ...answer,
  //           id: v1()
  //         }))
  //       }
  //       questions.push(question)
  //     })
  //   })
  // })
  //
  // return questions
}

export const questions: any = {} // associative array

exams.forEach(exam => {
  const targetFolderPath = path.join(
    tasksDirPath,
    exam.id
  )
  questions[exam.id] = generateQuestionsArray(targetFolderPath)
})
