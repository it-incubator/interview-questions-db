// import { v1 } from 'uuid'
// import { Task } from '../../questions'
//
// export const reactBasicTasks: Task[] = [
//   {
//     id: v1(),
//     questionText: 'В какой роли выступает React в паттерне проектирования MVC?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: 'Model',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'View',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Controller',
//         isCorrect: false,
//       },
//     ],
//     descriptionMarkup: `<p>MVC - паттерн проектирования, разделяющий приложение на три части: Model, View, Controller.</p>
// <p>Пользователь видит View(интерфейс) и взаимодействует с ним. View сообщает о действиях пользователя Controller, который в свою очередь изменяет Model. Model содержит данные бизнес-логики - при их обновлении уведомляется View и происходит перерисовка интерфейса.</p>`,
//   },
//   {
//     id: v1(),
//     questionText: 'При каких условиях происходит ререндер React-компонента?',
//     answers: [
//       {
//         id: v1(),
//         text: 'Ререндер родительского компонента',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Меняются пропсы компонента',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Меняется локальное состояние компонента',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Меняется значение, которое хранится в рефе компонента',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'Меняется состояние в Redux, которое компонент получает через `useSelector`',
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Назови правила хуков',
//     answers: [
//       {
//         id: v1(),
//         text: 'Используются только на верхнем уровне вложенности',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Должны содержать массив зависимостей',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'Вызываются только в функциональных компонентах и кастомных хуках',
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Как можно передать данные в React-компонент?',
//     answers: [
//       {
//         id: v1(),
//         text: 'С помощью `React.createContext` и `useContext`',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Использовать пропсы',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Использовать хук `useState`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'С помощью Redux и `useSelector`',
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Выбери верные утверждения об атрибуте `key`',
//     answers: [
//       {
//         id: v1(),
//         text: 'Значение атрибута должно быть уникальным',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Требуется для внутренней работы React (алгоритма согласования)',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'Может использоваться дочерним компонентом вместе с передаваемыми пропсами',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'В качестве значения допускается использовать индекс элемента массива, если порядок элементов не будет меняться',
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Что следует использовать, чтобы избежать излишней вложенности в разметке?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`React.Component`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`React.createContext`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`React.createRef`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`React.Fragment`',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup:
//       '<p>Можно также использовать сокращённый синтаксис <code>&lt;&gt;&lt;/&gt;</code></p>',
//   },
//   {
//     id: v1(),
//     questionText: 'Какой заголовок будет отображён на странице',
//     type: 'radio',
//     code: {
//       lang: 'jsx',
//       text: `export const Title = () => {
//   const array = []
//
//   return <h1>{array.length && 'The title'}</h1>
// }`,
//     },
//     answers: [
//       {
//         id: v1(),
//         text: 'The title',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '0',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'undefined',
//         isCorrect: false,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Какой код будет работать подобно методу жизненного цикла `componentDidMount`?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`useEffect(() => { ... })`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`useEffect(() => { return () => { ... } }, [dependencies])`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`useEffect(() => { return () => { ... } })`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`useEffect(() => { ... }, [])`',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup: `<p>Подобный вопрос могут спросить на собесе, однако Ден Абрамов пишет, что ментальная модель для <code>useEffect</code> не жизненный цикл, а синхронизация.</p>
// <p>Используя <code>useEffect</code>, мы должны думать не о том, на каком этапе жизненного цикла будет вызвана effect-функция, а скорее о том, какой эффект будет вызван изменением стейта. </p>
// <p>Видео доклада <a href="https://youtu.be/bGzanfKVFeU?t=144" target="_blank" rel="noopener noreferrer">"Goodbye, useEffect"</a> с конференции React Brussels, раскрывающее эту тему.</p>`,
//   },
//   {
//     id: v1(),
//     questionText: 'Какая запись инлайновых стилей в JSX будет корректной?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: "`style={{ background-color: 'green', margin-top: '5px' }}`",
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: "`style={ background-color: 'green', margin-top: '5px' }`",
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: "`style={ backgroundColor: 'green', marginTop: '5px' }`",
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: "`style={{ backgroundColor: 'green', marginTop: '5px' }}`",
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText:
//       'Какой метод жизненного цикла используется для избавления от ненужных побочных эффектов(например, отмена таймера)?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`componentDidMount`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`componentDidUpdate`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`componentWillUnmount`',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '`shouldComponentUpdate`',
//         isCorrect: false,
//       },
//     ],
//   },
// ]
//
// module.exports = { reactBasicTasks }
