import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//==================================================
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
//======================================================
function currentTime({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}
player.on('timeupdate', throttle(currentTime, 1000));

player.ready().then(() => {
  const playTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (playTime) {
    player.setCurrentTime(playTime);
  }
});
