import { v1 } from 'uuid'
import { Task } from '../../tasks'

export const cssBasicTasks: Task[] = [
  {
    id: v1(),
    questionText: 'Какой цвет фона будет у данных элементов?',
    type: 'radio',
    code: {
      text: `/* фрагмент CSS-кода */
.tomato {
  background-color: tomato;
}
.violet {
  background-color: violet;
}

<!-- фрагмент HTML-кода -->
<div class="tomato violet">1</div>
<div class="violet tomato">2</div>`,
      lang: 'css',
    },
    answers: [
      {
        id: v1(),
        text: '`tomato` у первого, и `violet` у второго',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`violet` у первого, и `tomato` у второго',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'у обоих `tomato` 🍅',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'у обоих `violet` 🌷',
        isCorrect: true,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Какой отступ будет между двумя параграфами?',
    type: 'radio',
    code: {
      text: `/* фрагмент CSS-кода */
.paragraph-1 {
  margin: 20px 20px 10px 30px;
}
.paragraph-2 {
  margin: 10px 20px
}

<!-- фрагмент HTML-кода -->
<p class="paragraph-1">1</p>
<p class="paragraph-2">2</p>`,
      lang: 'css',
    },
    answers: [
      {
        id: v1(),
        text: '`10px`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`20px`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`30px`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`40px`',
        isCorrect: false,
      },
    ],
    descriptionMarkup:
      '<p>Схлопывание внешних отступов - особенность блочной модели CSS, о которой следует помнить.</p>',
  },
  {
    id: v1(),
    questionText: 'Какие из перечисленных CSS-свойств можно анимировать?',
    type: 'checkbox',
    answers: [
      {
        id: v1(),
        text: '`display`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`font-size`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`opacity`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`margin`',
        isCorrect: true,
      },
    ],
    descriptionMarkup: `<p>Список <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties' target='_blank' rel="noopener noreferrer">анимируемых CSS-свойств</a> на MDN.</p>`,
  },
  {
    id: v1(),
    questionText: 'Какого цвета будет текст в параграфе?',
    type: 'radio',
    code: {
      text: `/* фрагмент CSS-кода */
#section1 {
  color: tomato;
}
p {
  color: violet;
}

<!-- фрагмент HTML-кода -->
<section id="section1"/>
  <p>some text</p>
</section>`,
      lang: 'css',
    },
    answers: [
      {
        id: v1(),
        text: '`violet`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`tomato`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText:
      'Какая CSS-функция используется для вставки пользовательских свойств(custom property)?',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: '`calc()`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`var()`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`attr()`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`hsl()`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Какое значение не может принимать свойство `position`?',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: '`static`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`relative`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`block`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`absolute`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`sticky`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText:
      'Требуется, чтобы высота контейнера составляла 1 / 3 от задаваемой ширины. Какое CSS-свойство решит эту задачу?',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: '`max-height`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`padding-top`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`position`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`aspect-ratio`',
        isCorrect: true,
      },
    ],
  },
  {
    id: v1(),
    questionText: `Мы сверстали шапку сайта, используя flex. На небольших экранах логотип уменьшается в размерах. Как можно это исправить?
      (подсказка: можешь изучить в devtools шапку этого сайта😉)`,
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: 'Указать для логотипа фиксированное значение свойства `width`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Добавить контейнеру CSS-объявление `justify-content: space-between;`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Добавить логотипу CSS-объявление `flex-shrink: 0;`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Указать для логотипа фиксированное значение свойства `flex-basis`',
        isCorrect: false,
      },
    ],
    descriptionMarkup:
      '<p>Эта проблема часто возникает при адаптиве или переполнении контентом. Часто полезно сразу прописывать <code>flex-shrink: 0</code>, чтобы обезопасить флекс-элемент от сжатия, если оно нежелательно.</p>',
  },
  {
    id: v1(),
    questionText:
      'Выбери значение, которое необходимо указать `text-align`, чтобы текст растянулся по всей ширине контейнера, увеличив пробелы между словами',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: '`text-align: center`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`text-align: justify`',
        isCorrect: true,
      },
      {
        id: v1(),
        text: '`text-align: inherit`',
        isCorrect: false,
      },
      {
        id: v1(),
        text: '`text-align: auto`',
        isCorrect: false,
      },
    ],
  },
  {
    id: v1(),
    questionText: 'Что делает CSS-объявление `visibility: hidden;` с элементом?',
    type: 'radio',
    answers: [
      {
        id: v1(),
        text: 'Удаляет элемент из DOM',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Делает элемент прозрачным, сохраняя возможность взаимодействия с ним',
        isCorrect: false,
      },
      {
        id: v1(),
        text: 'Скрывает элемент, сохраняя его расположение. При этом с элементом нельзя взаимодействовать',
        isCorrect: true,
      },
      {
        id: v1(),
        text: 'Скрывает элемент, вырывая его из потока документа. При этом с элементом нельзя взаимодействовать',
        isCorrect: false,
      },
    ],
  },
]
