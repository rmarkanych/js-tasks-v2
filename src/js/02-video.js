import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
console.log(iframe);

const player = new Player(iframe);

player.on('timeupdate', function () {
  console.log('played the video!');
});
