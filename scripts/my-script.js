console.log("Sending a message to the console");

//Create new <p> element
const todaysDate = document.createElement("p");

//Add today's date to "todaysDate"
todaysDate.innerHTML = (new Date()).toLocaleDateString('en-GB').toString();

//Use querySelector to get "dateHere"
const dateLocation = document.body.querySelector("#dateHere");

//Appen todaysDate to dateLocation
dateLocation.appendChild(todaysDate);
