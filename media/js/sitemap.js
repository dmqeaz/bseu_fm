$(function() {
  var toggleSlide = function(self) {
    self.siblings('ul').slideToggle();
  };
  var _timer = null;

  $('.cat').closest('li').hover(function() {
    var _this = $(this);
    _timer = setTimeout(function() {
      toggleSlide(_this.find('.cat'));
    }, 300);
  },
  function() {
    clearTimeout(_timer);
  });
});
