import { exams } from '../exams'
import { shuffleArray } from '../utils/shuffle-array'
import { questions } from '../questions'

const MINIMAL_QUESTIONS_QUANTITY = 5
const EXAM_QUESTIONS_QUANTITY = 10

export const examsRepository = {
  getExams() {
    return exams.filter(exam => questions[exam.id].length >= MINIMAL_QUESTIONS_QUANTITY)
  },
  getExamQuestionsById(id: string) {
    return shuffleArray(questions[id]).slice(0, EXAM_QUESTIONS_QUANTITY)
  }
}
