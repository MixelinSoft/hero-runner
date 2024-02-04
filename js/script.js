const ctx = document.getElementById('canvas').getContext('2d');
const background = new Image();
background.src = '/img/background.png';
background.addEventListener('load', () => {
  ctx.drawImage(background, 0, 0, 1280, 720);
});
let heroFraps = 0;

const hero = new Image();
hero.src = '/img/hero.png';
hero.addEventListener('load', () => {
  setInterval(() => {
    ctx.drawImage(background, 0, 0, 1280, 720);
    ctx.drawImage(hero, heroFraps, 0, 128, 128, 80, 470, 128, 128);
    heroFraps === 768 ? (heroFraps = 0) : (heroFraps += 128);
    console.log(heroFraps);

    console.log('refershed');
  }, 100);
});

class Game {
  constructor() {}
}
