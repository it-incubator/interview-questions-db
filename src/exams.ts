export type Exam = {
  id: string
  title: string
  category: string
  level?: 'basic' | 'middle' | 'advanced'
  image?: string
  labels?: string[]
}

export const exams: Exam[] = [
  {
    id: 'html-middle',
    title: 'HTML Middle',
    category: 'HTML',
    level: 'middle',
    labels: ['frontend'],
  },
  {
    id: 'css-basic',
    title: 'CSS Basic',
    category: 'CSS',
    level: 'basic',
    labels: ['frontend'],
  },
  {
    id: 'js-basic',
    title: 'JS Basic',
    category: 'JavaScript',
    level: 'basic',
    labels: ['frontend', 'backend'],
  },
  {
    id: 'react-basic',
    title: 'React Basic',
    category: 'React',
    level: 'basic',
    labels: ['frontend'],
  },
  {
    id: 'react-middle',
    title: 'React Middle',
    category: 'React',
    level: 'middle',
    labels: ['frontend'],
  },
]
