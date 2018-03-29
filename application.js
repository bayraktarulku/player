Vue.component('audio-card', {
  props: ['src'],
  template: '<div><div class="demo-card-wide mdl-card mdl-shadow--2dp">\
             <audio ref="player"><source :src="src"></audio>\
               <div class="mdl-card__title">\
                 <h2 class="mdl-card__title-text">Music</h2>\
               </div>\
             <div class="mdl-card__supporting-text">\
              <button @click="play_onclick" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">\
                <svg><path fill="#000000" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>\
              </button>\
              <button @click="pause_onclick" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">\
                <svg><path fill="#000000" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>\
              </button>\
              <button @click="vol_up_onclick" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">\
                <svg><path fill="#000000" d="M3,9H7L12,4V20L7,15H3V9M14,11H17V8H19V11H22V13H19V16H17V13H14V11Z" /></svg>\
              </button>\
              <button @click="vol_down_onclick" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">\
                <svg><path fill="#000000" d="M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z" /></svg>\
              </button>\
             </div>\
             </div></div>',
  'methods': {
    'play_onclick': function () {
        player = this.$refs.player;
        player.play();
    },
    'pause_onclick': function() {
      this.$refs.player.pause();
    },
    'vol_up_onclick': function() {
      if (this.$refs.player.volume < 1)
        {
            this.$refs.player.volume += 0.1;
        }
    },
    'vol_down_onclick': function () {
      if (this.$refs.player.volume > 0.1)
        {
            this.$refs.player.volume -= 0.1;
        }
      }
    }
});



var app = new Vue({
  'el': '#app',
  'data': {
    'path': [
      { 'name': 'music/music.mp3' },
      { 'name': 'music/music.mp3' },
    ]
  },
});
