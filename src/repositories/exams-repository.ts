import { exams } from '../exams'
import { shuffleArray } from '../utils/shuffle-array'
import { questions } from '../questions'

export const examsRepository = {
  getExams() {
    return exams
  },
  getExamQuestionsById(id: string) {
    return shuffleArray(questions[id]).slice(0, 10)
  }
}
