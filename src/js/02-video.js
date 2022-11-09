import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle((function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}), 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime !== null) { player.setCurrentTime(saveTime) };