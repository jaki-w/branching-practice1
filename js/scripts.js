$(document).ready(function() {
 const over18 = confirm("Are you 18 and older?");
 console.log(over18);

 if (over18 === true) {
   $('#voter').show();
   
 } else {
   $('#underage').show();
 }
});
