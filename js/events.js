function getIt() {
  $('p').on('click', function() {
  alert("hey!")
})}

function  frameIt () {
  $('img').load(function(){
    addClass('tasty')
  })
}

$(document).ready(function(){
  getIt()
  frameIt()

});
