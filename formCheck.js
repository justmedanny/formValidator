/*jslint browser:true */

//this sets up the global variables to calculate the security number by not actually using any real numbers.
var stringA = "ab",
    stringB = "a",
    stringC = "abcdef",
    stringD = "abcd",
    stringE = "abcdefghi",
    digitA = stringA.length.toString(),
    digitB = stringB.length.toString(),
    digitC = stringC.length.toString(),
    digitD = stringD.length.toString(),
    digitE = stringE.length.toString(),
    realNumber = +(digitA + digitB + digitC + digitD + digitE) - 1;

//this function makes sure that the security number is correct and that the email matches. 
//If they are not, then the form is not processed until that information is corrected.
document.getElementById("contactForm").addEventListener("submit", function () {

//this sets the data passed from the form to be set to a digit (real number).
    var formNumber = +document.getElementById("formCheck").value,

//this is the place on the webpage where errors will be placed.
        errorMessage = document.getElementById("errorMessage"),

//this sets the variables to the emails that are entered on the form from the web page.
        userEmail1 = document.getElementById("userEmail1").value,
        userEmail2 = document.getElementById("userEmail2").value;

    if ((formNumber === (realNumber + 1)) && (userEmail1 === userEmail2)) {
        return true;
    } else if ((formNumber === (realNumber + 1)) && (userEmail1 !== userEmail2)) {
        event.preventDefault();
        errorMessage.innerHTML = "Your email addresses did not match. Please enter them correctly and resubmit.";
        return false;
    } else if ((formNumber !== (realNumber + 1)) && (userEmail1 === userEmail2)) {
        event.preventDefault();
        errorMessage.innerHTML = "The security number is not correct. Please enter the correct security number";
        return false;
    } else if ((formNumber !== (realNumber + 1)) && (userEmail1 !== userEmail2)) {
        event.preventDefault();
        errorMessage.innerHTML = "The security number is not correct and your email addresses do not match. Please enter the correct information and resubmit.";
        return false;
    } else {
        return true;
    }

}, false);
