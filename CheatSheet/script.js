$(document).ready(function(){
  $('sidenav').on("click", function(e){
    $(this).next('li').toggle();
    /* e.stopPropagation();
    e.preventDefault(); */
  });
});