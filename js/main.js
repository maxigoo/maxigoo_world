$(function() {
  $('body').keyup(function(e){
     if (e.keyCode == 32 && !$("input").is(":focus")) {
         // user has pressed space
         $('#myModal').modal();
     }
});
})