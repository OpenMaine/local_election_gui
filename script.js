$( document ).ready(function() {
  $('.changer').click(function(e){
    changeIframe(e);
  })
  $('.frame').click(function(e){
    opentab(e);
  })
})

function changeIframe(e) {
  var link = $(e.currentTarget).data('link');
  $('#townframe').attr('src',link);
}

function opentab(e) {
  var link = $(e.currentTarget).data('link');
  window.open(link);
}
