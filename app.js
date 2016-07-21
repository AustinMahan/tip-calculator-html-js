$(document).ready(function () {

});

$('button').click(function (event) {
  event.preventDefault();
  var userInput = parseFloat($('#userInput').val());
  var taxRate = parseFloat($('#selectRate').val());

  // console.log($('#userInput').val());
  $('.content').append('<h2>Tip: $' + (userInput * taxRate).toFixed(2) + '</h2>');
});
