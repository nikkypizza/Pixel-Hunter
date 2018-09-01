import {INITIAL_GAME} from '../utils/changeLevel.js';

const heartFullIcon = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
const heartEmptyIcon = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`;

const gameStatsNode = (state) => `
  <div class="game__timer">${state.time / 1000}</div>
  <div class="game__lives">
    ${new Array(INITIAL_GAME.lives - state.lives).fill(heartEmptyIcon).join(``)}
    ${new Array(state.lives).fill(heartFullIcon).join(``)}
  </div>`;

const returnBtnNode = `
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>`;

const getHeaderNode = (state) => {
  if (state) {
    return `
    <header class="header">
      ${returnBtnNode}
      ${gameStatsNode(state)}
    </header>`;
  }
  return `
  <header class="header">
      ${returnBtnNode}
  </header>`;
};

export default getHeaderNode;
