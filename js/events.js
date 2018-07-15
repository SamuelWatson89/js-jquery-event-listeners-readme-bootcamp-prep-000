function getIt() {
  $('p').on('click', function() {
  alert("hey!")
})}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(){
    if (key.which == 71)
  })
}


$(document).ready(function(){
  getIt;
  frameIt();

});
