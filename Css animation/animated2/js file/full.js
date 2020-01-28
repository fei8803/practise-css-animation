$(function() {
  var effects = "animated bounce";
  var effectsEnd =
    "animationEnd oAnimationEnd mozAnimationEnd webkitAnimationEnd";

  $("a.button").click(function() {
    $(this).addClass(effects);
  });
});
