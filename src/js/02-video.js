import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', throttle((function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}), 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime != null) { player.setCurrentTime() };