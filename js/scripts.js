// Empty JS for your own code to be here
$(document).ready(function () {
  Paddle.Setup({ vendor: 38954 });

  var song = window.uQuery('song');

  if (song) {
    $('a.paddle_button').each(function () {
      $(this).attr('data-passthrough', "{ \"song\": \"" + song + "\" }");
    })
  }
});