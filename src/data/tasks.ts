import { javascriptBasicTasks } from './tasks/javascript/javascript-basic'
import { reactBasicTasks } from './tasks/react/react-basic'
import { htmlMiddleTasks } from './tasks/html/html-middle'
import { cssBasicTasks } from './tasks/css/css-basic'


export type Task = {
  id: string
  questionText: string
  answers: AnswerType[]
  type?: QuestionType
  code?: {
    lang: string
    text: string
  }
  descriptionMarkup?: string
}

export type AnswerType = {
  id: string
  text: string
  isCorrect: boolean
}

export type QuestionType = 'radio' | 'checkbox'

export type Tasks = {
  [techId: string]: Task[]
}

export const tasks: Tasks = {
  'js-basic': javascriptBasicTasks,
  'react-basic': reactBasicTasks,
  'css-basic': cssBasicTasks,
  'html-middle': htmlMiddleTasks,
}

