import {createElementFromTemplate} from '../util.js';

const modalErrorTemplate = `
  <section class="modal">
    <div class="modal__inner">
      <h2 class="modal__title">Произошла ошибка!</h2>
      <p class="modal__text modal__text--error">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
    </div>
  </section>`;
const modalErrorNode = createElementFromTemplate(modalErrorTemplate);

export {modalErrorNode};
