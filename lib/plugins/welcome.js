
/**
 * RPL_WELCOME plugin to set `irc.me`.
 *
 * @return {Function}
 * @api public
 */

module.exports = function() {
  return function(irc) {
    irc.on('data', function(msg) {
      if ('RPL_WELCOME' != msg.command) return;

      var nick = msg.params.trim().split(/\s+/)[0];

      irc.me = nick;
      irc.emit('welcome', irc.me);
    });
  }
}
