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
  
}


$(document).ready(function(){
  getIt;
  frameIt();

});
