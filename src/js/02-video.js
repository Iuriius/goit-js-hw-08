import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', throttle((function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
}), 1000));

const onPlay = function (data) {
    // data is an object containing properties specific to that event
};
player.on('play', onPlay);


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});