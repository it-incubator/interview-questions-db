export type Question = {
  id: string
  questionText: string
  answers: AnswerType[]
  type?: QuestionType
  code?: {
    lang: string
    text: string
  }
  descriptionMarkup?: string
  author?: string
}

export type AnswerType = {
  id: string
  text: string
  isCorrect: boolean
}

export type QuestionType = 'radio' | 'checkbox'

export type Questions = {
  [techId: string]: Question[]
}
