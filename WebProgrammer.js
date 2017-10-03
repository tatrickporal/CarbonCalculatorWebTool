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
  // This code block outputs all the data so it can be displayed on the browser
  //Where to output is done by selecting the respective ID's
  document.getElementById("output").innerHTML = "You produce a total of " + total + "lbs of CO2 weekly" ;
  document.getElementById("individualInfo").innerHTML =  plasticEmissionNumber + "lbs of CO2 realeased from the creation of the plastic" + " +  " + paperEmissionNumber + "lbs of CO2 realeased from using paper cups = " + total + " total pounds of CO2 produced" ;
  document.getElementById("info").innerHTML = "What do these number mean?" ;
  document.getElementById("moreInfo").innerHTML = "To make these numbers more understandable:"  ;
  document.getElementById("moreInfoTwo").innerHTML = " - "+ total + "lbs of CO2 is the same amount of CO2 released from driving " + miles + " miles in an average car, " + milesYearly + " miles yearly!";
  document.getElementById("citations").innerHTML = "Resrources and Articles"; 
  document.getElementById("citationOne").innerHTML = "<li>Pacific Institute Bottled Water Fact Sheet</li>";
  document.getElementById("citationTwo").innerHTML = "<li>EPA's Greenhouse Gases Equivalencies Calculator</li>";
  document.getElementById("citationThree").innerHTML = "<li>Enviromental Research Letters: Energy Implications of Bottled Water</li>";
  document.getElementById("citationFour").innerHTML = "<li>Disposable Coffee Cup Infographic</li>";
}   