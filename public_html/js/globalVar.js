var succesFull = "You are SuccessFully ";
var tryAgain = "Sorry Try Again! ";
var cityName = [
    "Ahmedabad",
    "Dahod",
    "Bharuch",
    "Valsad",
    "Vadodara",
    "Godhra"
];


function successAlert(msg) {
    alertify.delay(2000); 
    setTimeout(function() {
    alertify.logPosition("top right");
    alertify.success(msg);
}, 100);
}

function failAlert(msg) {
    alertify.delay(2000); 
    setTimeout(function() {
    alertify.logPosition("top right");
    alertify.error(msg);
}, 100);
    
}