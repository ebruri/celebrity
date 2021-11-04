$(document).ready(function() {
  const fruit = $("input:radio[name=fruit]").val();
  const movie = $("input:radio[name=movie]").val();
  $("#submit-button").click(function() {
   console.log(fruit);
   console.log(movie);
    if (fruit === "apple" && movie === "RomCom" ) {
      $('.hidden').hide()
      $('#sponge').show()
    } else if (fruit === "apple" && movie === "Action") {
      $('.hidden').hide()
      $('#bunny').show() 
    } else if (fruit === "banana" && movie === "RomCom") {
      $('.hidden').hide()
      $('#hat').show() 
    } else {
      $('.hidden').hide()
      $('#duck').show() 
    }
  });  
});



