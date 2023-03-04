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
    id: 'js-function',
    title: 'JS Functions',
    category: 'JavaScript',
    level: 'basic',
    labels: ['frontend', 'backend'],
  },
  {
    id: 'js-middle',
    title: 'JS Middle',
    category: 'JavaScript',
    level: 'middle',
    labels: ['frontend', 'backend'],
  },
  {
    id: 'html-basic',
    title: 'HTML Basic',
    category: 'HTML',
    level: 'basic',
    labels: ['frontend'],
  },
  {
    id: 'css-flexbox',
    title: 'CSS Flexbox',
    category: 'CSS',
    level: 'basic',
    labels: ['frontend'],
  },
  {
    id: 'data-structures',
    title: 'Data structures',
    category: 'Data structures',
    level: 'middle',
    labels: ['frontend', 'backend'],
  },
  {
    id: 'js-arrays',
    title: 'JS Arrays',
    category: 'JavaScript',
    level: 'basic',
    labels: ['frontend', 'backend'],
  }
]
