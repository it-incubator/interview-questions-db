// import { v1 } from 'uuid'
// import { Task } from '../../questions'
//
// export const htmlMiddleTasks: Task[] = [
//   {
//     id: v1(),
//     questionText: 'Какие значения может принимать атрибут `method` у тега `<form>`?',
//     type: 'checkbox',
//     answers: [
//       {
//         id: v1(),
//         text: 'get',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'delete',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'put',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'post',
//         isCorrect: true,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Какой из данных атрибутов не является глобальным?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: 'class',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'hidden',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'tabindex',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'role',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'disabled',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup: `<p>Глобальные атрибуты - атрибуты, которые можно использовать для любых HTML-тегов.</p>
// <p><code>role</code> - глобальный атрибут, который описывает роль элемента в контексте веб-страницы и участвует в построении Accessibility object model (AOM) - семантической версии DOM. Семантические теги имеют заданную роль по-умолчанию, но с помощью этого атрибута её можно переопределять/уточнять. Если стало интересно, можно почитать об этом на <a href="https://web.dev/learn/html/semantic-html/" target='_blank' rel="noopener noreferrer">web.dev</a> :)</p>`,
//   },
//   {
//     id: v1(),
//     questionText: 'Какие теги не несут семантической нагрузки?',
//     type: 'checkbox',
//     answers: [
//       {
//         id: v1(),
//         text: '<p>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<div>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<b>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<span>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<nav>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<aside>',
//         isCorrect: false,
//       },
//     ],
//     descriptionMarkup: `<p>Практически все теги в современном HTML несут семантическую нагрузку.</p>
// <p>Так, например, тег <code>&lt;b&gt;</code>, согласно <a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element" target="_blank" rel="noopener noreferrer">спецификации</a>, используется для <b>ключевых слов</b> в тексте.</p>`,
//   },
//   {
//     id: v1(),
//     questionText: 'Выбери теги, которые могут быть помещены в `<head>`',
//     answers: [
//       {
//         id: v1(),
//         text: '<meta>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<title>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<header>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<link>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<base>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<script>',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup:
//       '<p><code>&lt;base&gt;</code> позволяет установиться URL, который будет использоваться в начале всех относительных путей. Используется не очень часто. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base" target="_blank" rel="noopener noreferrer">Статья на MDN</a></p>`',
//   },
//   {
//     id: v1(),
//     questionText: 'Какие теги могут быть помещены в `<button>` согласно спецификации HTML?',
//     answers: [
//       {
//         id: v1(),
//         text: '<p>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<a>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<img>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<strong>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<span>',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup: `<p>Согласно <a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element" target="_blank" rel="noopener noreferrer">спецификации</a> в <code>&lt;button&gt;</code> может помещаться фразовый контент(Phrasing content - теги, отвечающие за разметку текста внутри параграфов), за исключением интерактивного контента(ссылки, инпуты и т.д.).</p>
// <p>Существует сервис <a href="https://caninclude.glitch.me/" target='_blank' rel="noopener noreferrer">Can I Include</a>, позволяющий быстро проверить возможность вкладывать теги.</p>`,
//   },
//   {
//     id: v1(),
//     questionText: 'Выбери теги, которые используются для создания различных типов списков',
//     answers: [
//       {
//         id: v1(),
//         text: '<ol>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<legend>',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '<ul>',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '<dl>',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup: `<code>&lt;dl&gt;</code> используется для создания списка пар терминов и их описаний. Например, можно применить этот тег, если нужно сверстать список научных терминов и их определений.`,
//   },
//   {
//     id: v1(),
//     questionText:
//       'Какой атрибут используется для проверки введенного в `<input>` значения на соответствие регулярному выражению?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`regex`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`type`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`name`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`pattern`',
//         isCorrect: true,
//       },
//     ],
//     descriptionMarkup: `Проверка введенного текста будет происходить перед отправкой формы. Если текст будет не соответствовать регулярному выражению, браузер покажет всплывающую подсказку.`,
//   },
//   {
//     id: v1(),
//     questionText: 'Выбери элемент, который может быть прямым дочерним элементом для`<tbody>`?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`<tr>`',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '`<table>`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`<td>`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`<thead>`',
//         isCorrect: false,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText: 'Какая ошибка в данном HTML-коде?',
//     type: 'radio',
//     code: {
//       text: `<video src="media/flower.mp4" autoplay width="250">`,
//       lang: 'html',
//     },
//     answers: [
//       {
//         id: v1(),
//         text: 'Требуется закрывающий тег `</video>`',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: 'У атрибута `autoplay` не указано значение',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'Отсутствует атрибут `type`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: 'В этом коде нет ошибок',
//         isCorrect: false,
//       },
//     ],
//   },
//   {
//     id: v1(),
//     questionText:
//       'Какое значение нужно указать в атрибуте `target`, чтобы ссылка открывалась в новой вкладке?',
//     type: 'radio',
//     answers: [
//       {
//         id: v1(),
//         text: '`_self`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`_blank`',
//         isCorrect: true,
//       },
//       {
//         id: v1(),
//         text: '`_parent`',
//         isCorrect: false,
//       },
//       {
//         id: v1(),
//         text: '`_top`',
//         isCorrect: false,
//       },
//     ],
//     descriptionMarkup: `<p>При этом желательно добавить атрибут <code>rel</code> со значением <code>"noopener noreferrer"</code> в целях безопасности, т.к. при переходе на внешний веб-сайт, он может получить доступ к окну, с которого осуществился переход. Знакомство со значениями атрибута <code>rel</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener" target="_blank" rel="noopener noreferrer">noopener</a> и <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer" target="_blank" rel="noopener noreferrer">noreferrer</a> можно начать с MDN.</p>
// <p>P.S. не волнуйся, в ссылках выше указано <code>rel="noopener noreferrer"</code>😉</p>`,
//   },
// ]
// module.exports = { htmlMiddleTasks }
