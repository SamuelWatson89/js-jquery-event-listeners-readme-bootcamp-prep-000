function getIt() {
  $('p').on('click', function() {
  alert("hey!")
})}

function  frameIt () {
  $('img').load(function(){
    $('img').append('.tasty')
  })
}

$(document).ready(function(){
  getIt()

});
