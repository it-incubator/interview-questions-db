const javascriptBasicTasks = require('./tasks/javascript/javascript-basic')
const reactBasicTasks = require('./tasks/react/react-basic')
const cssBasicTasks = require('./tasks/css/css-basic')
const htmlMiddleTasks = require('./tasks/html/html-middle')

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

