import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const MESSAGE = 'videoplayer-current-time';

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => localStorage.setItem(MESSAGE, data.seconds), 1000)
);
player.setCurrentTime(localStorage.getItem(MESSAGE)).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log('error');
      break;
  }
});
