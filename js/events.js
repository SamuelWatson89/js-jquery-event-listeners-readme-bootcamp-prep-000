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
  $('input').on('keydown', function(key){
    if (key.which == 71) {
      alert('G was pressed')
    }
  })
}

function submitIt(){
  $('submit').on('click', function(){
    
  })
}


$(document).ready(function(){
  getIt;
  frameIt();
  pressIt();

});
