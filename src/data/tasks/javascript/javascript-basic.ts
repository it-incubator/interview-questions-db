import { v1 } from 'uuid'
import { Task } from '../../tasks'

const javascriptBasicTasks: Task[] = [
  {
    id: v1(),
    questionText: 'Как можно добавить элемент в начало массива?',
    answers: [
      {
        id: v1(),
        text: 'Использовать `Array.prototype.unshift()`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Использовать `Array.prototype.push()`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Использовать `spread` оператор',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Использовать `Array.prototype.shift()`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Что характерно для чистых функций?',
    answers: [
      {
        id: v1(),
        text: 'Не имеют side effects',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Могут мутабельно изменять входные данные',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Предсказуемо возвращают один и тот же результат при одинаковых параметрах',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Могут зависеть от внешних переменных',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Как можно сделать глубокую копию этого объекта?',
    code: {
      lang: 'js',
      text: `const user = {
  name: 'Sonya',
  age: 28,
  friends: ['Vasilisa', 'Snow', 'Zlata'],
}

let userDeepCopy`,
    },
    answers: [
      {
        id: v1(),
        text: 'Вручную, используя spread-оператор следующим образом: `{...user}`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Вручную, используя spread-оператор следующим образом: `{...user, friends: [...user.friends]}`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Использовать метод Object.assign: `Object.assign(userDeepCopy, user)`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Использовать методы встроенного JSON-объекта: `JSON.parse(JSON.stringify(user))`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'С помощью WebAPI-метода `structuredClone`',
        isCorrect: true,
      },
    ],
    descriptionMarkup: `<p>Следует помнить, что <code>Object.assign</code> и spread-оператор делают неглубокую копию (shallow copy).</code></p>
<p>Использовать JSON-методы следует с пониманием ограничений JSON-формата. Например, такая копия лишит объект всех методов (JSON не предусматривает функций).</p>
<p><code>structuredClone</code> - новое браузерное API для глубокого копирования. Почитать о нём можно на <a href='https://developer.mozilla.org/en-US/docs/Web/API/structuredClone' target='_blank' rel="noopener noreferrer">MDN</a>.</p>
`,
  },
  {
    id: v1(),
    questionText: 'Чему равен typeof NaN?',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: "`'number'`",
        isCorrect: true,
      },
      {
        id: v1(),
        text: "`'object'`",
        isCorrect: false,
      },
      {
        id: v1(),
        text: "`'NaN'`",
        isCorrect: false,
      },
      {
        id: v1(),
        text: "`'undefined'`",
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Назови способы создания массива',
    answers: [
      {
        id: v1(),
        text: 'Литерал массива `[]`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Конструктор `new Array()`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Метод `Array.of()`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Метод `Array.from()`',
        isCorrect: true,
      },
    ],
    descriptionMarkup: `<p><code>Array.of</code> и <code>Array.from</code> - статические методы массивов, введённые в ECMAScript 2015.</p>
<p><code>Array.of</code> создаёт массив из переданных аргументов, а <code>Array.from</code> создаёт массив из массивоподобных или итерируемых объектов.</p>
`,
  },
  {
    id: v1(),
    questionText: 'Какие методы есть у функций?',
    answers: [
      {
        id: v1(),
        text: '`call`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`apply`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`bind`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`name`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: `Сколько раз 'Yo' будет выведено в консоль?`,
    type: 'radio',
    code: {
      lang: 'js',
      text: `for (let i = 0; i < 7; i += 2) {
  console.log('Yo')
}`,
    },
    answers: [
      {
        id: v1(),
        text: `0`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `2`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `3`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `4`,
        isCorrect: true,
      },
    ],
  },
  {
    id: v1(),
    questionText: `Какого falsy-значения не хватает в массиве?`,
    type: 'radio',
    code: {
      lang: 'js',
      text: `[false, null, NaN, undefined, 0]`,
    },
    answers: [
      {
        id: v1(),
        text: '`[]`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`-1`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`{}`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: "`''`",
        isCorrect: true,
      },
    ],
  },
  {
    id: v1(),
    questionText: `Какое условие приведёт к выходу из цикла после вывода числа 3 в консоль?`,
    type: 'radio',
    code: {
      lang: 'js',
      text: `let i = 0
do {
  i += 1
  console.log(i)
} while ( /*your code*/ )`,
    },
    answers: [
      {
        id: v1(),
        text: `i < 4`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `i > 3`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `i <= 3`,
        isCorrect: false,
      },
      {
        id: v1(),
        text: `i < 3`,
        isCorrect: true,
      },
    ],
  },
  {
    id: v1(),
    questionText: `Как можно обратиться к последнему элементу массива?`,
    answers: [
      {
        id: v1(),
        text: '`array[-1]`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`array[array.length - 1]`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`array.at(-1)`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`array.indexOf(-1)`',
        isCorrect: false,
      },
    ],
    descriptionMarkup: `<p>Использовать метод массива <code>.at()</code> в этом случае куда приятней, правда? :) Сейчас он поддерживается во всех современных браузерах.</p>`,
  },
]

module.exports = { javascriptBasicTasks }
