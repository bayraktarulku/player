var app = new Vue({
  'el': '#app',
  'data': {
    'selected': 'dashboard',
  },
  'methods': {
    'play_onclick': function () {
        player = this.$root.$refs.player;
        player.play();
    },
    'pause_onclick': function() {
      this.$root.$refs.player.pause();
    },
    'stop_onclick': function() {
      this.$root.$refs.player.pause();
    },
    'vol_up_onclick': function() {
      if (this.$root.$refs.player.volume < 1)
        {
            this.$root.$refs.player.volume += 0.1;
        }
    },
    'vol_down_onclick': function () {
      if (this.$root.$refs.player.volume > 0.1)
        {
            this.$root.$refs.player.volume -= 0.1;
        }
      }
    }
});
