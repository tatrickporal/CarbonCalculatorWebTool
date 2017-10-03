// These  updates the numbers just beneath the submit button
// The first controls the plastic bottle numbers
$(":input").on('keyup mouseup', function () {
  var plasticNumber = $("#plasticNumber").val();
  $("#plastics").text(plasticNumber);
}).trigger('mouseup');

// The second controls the paper cup numbers
$(":input").on('keyup mouseup', function () {
  var paperNumber = $("#paperNumber").val();
  $("#papers").text(paperNumber);
}).trigger('mouseup');

//This function controls the output and is called when the submit button is pressed
function submit() {
  //User inputted numbers 
  var plasticNumber = $('#plasticNumber').val();
  var paperNumber = $('#paperNumber').val();
  		//These next variables control the calculations this first block is weekly emissions
    	var plasticEmission = 0.32;
    	var paperEmission = .25;
    	var plasticEmissionNumber = plasticEmission * plasticNumber;
    	var paperEmissionNumber = paperEmission * paperNumber;
    	//This is the total number combined with the numbers above
    	var totalUnfixed = plasticEmissionNumber + paperEmissionNumber;
    	var total = totalUnfixed.toFixed(2);
    	//This block controlls the calculations for "What do these numbers mean?" section
    	var carOutput = 0.91;
    	var milesUnfixed  = total/.91;
    	var miles = milesUnfixed.toFixed(2);
    	var milesYearlyUnfixed = miles * 52;
    	var milesYearly = milesYearlyUnfixed.toFixed(2); 

      var tripsUnfixed = milesYearly/ 11;
      var trips = tripsUnfixed.toFixed(0);

  // This code block outputs all the data so it can be displayed on the browser
  //Where to output is done by selecting the respective ID's
  document.getElementById("output").innerHTML = "You produce a total of " + total + "lbs of CO2 weekly, <span style='font-size:20px;'>("+ plasticEmissionNumber+"lbs from Plastic and "+paperEmissionNumber+"lbs from paper)</span> " ;
 
  document.getElementById("info").innerHTML = "<a href='#' >What do these number mean?</a>" ; 
  document.getElementById("moreInfoTwo").innerHTML = " - <b>"+ total + "lbs</b> of CO2 is the same amount of CO2 released from driving <b>" + miles + "</b> miles in an average car, <b>" + milesYearly + "</b> miles yearly!";
  document.getElementById("moreInfoThree").innerHTML = " - With those yearly miles you would be taking the trip from here to the UC Santa Cruz Campus <b>" + trips + "</b> times";
if(milesYearly > 20 && milesYearly < 30){
document.getElementById("moreInfoFour").innerHTML = " * or a trip up to <b>Downtown San Jose!</b>";
}
if(milesYearly > 30 && milesYearly < 49){
  document.getElementById("moreInfoFive").innerHTML = " * or a trip up to <b>Palo Alto!</b>";
  }
if(milesYearly > 50 && milesYearly < 99){
document.getElementById("moreInfoSix").innerHTML = " * or a trip up to <b>Downtown SF!</b>";
}
if(milesYearly > 100 && milesYearly < 140){
document.getElementById("moreInfoSeven").innerHTML = " * or a trip up to <b>Downtown Sacramento!</b>";
}
if(milesYearly > 141){
document.getElementById("moreInfoEight").innerHTML = " * or a trip accross statelines into <b>Nevada!</b>";
}

  
  //Below is the code to the resources part of the output
  document.getElementById("citations").innerHTML = "Resrources and Articles"; 
  document.getElementById("citationOne").innerHTML = "<li>Pacific Institute Bottled Water Fact Sheet</li>";
  document.getElementById("citationTwo").innerHTML = "<li>EPA's Greenhouse Gases Equivalencies Calculator</li>";
  document.getElementById("citationThree").innerHTML = "<li>Enviromental Research Letters: Energy Implications of Bottled Water</li>";
  document.getElementById("citationFour").innerHTML = "<li>Disposable Coffee Cup Infographic</li>";
} 