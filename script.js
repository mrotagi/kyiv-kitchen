const form = document.getElementById("reservation");

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Thank you! Your reservation has been received. We look forward to welcoming you at Kyiv Kitchen.");

form.reset();

});