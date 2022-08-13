import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const MESSAGE = 'videoplayer-current-time';

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(MESSAGE, data.seconds);
  }, 1000)
);

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
