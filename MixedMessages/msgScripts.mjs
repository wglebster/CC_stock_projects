//import quotes and jokes from txtArrays
import {
    quotes,
    jokes
}
from './txtArrays.mjs';

/*this function takes an input of 'quotes' or 'jokes' and prints to console depending on inputted parameter from either 
quotes or jokes array. If neither parameter is selected or it is left empty, a default message is logged to console.
 */
function mixedMessages(input) {
    const rand = Math.floor((Math.random() * 99)); //define a random number between 0 to 99.
    if (input === "quote") { //check user input
        console.log(quotes[rand]); //log to console from quotes at randomly generated index
    } else if (input === "joke") { //check user input
        console.log(jokes[rand]); //log to console from jokes at randomly generated index
    } else {
        console.log("Please use either 'quote' or 'joke' as parameter for this function"); //default console message if
    } //if neither allowed message is selected
};


mixedMessages('joke'); //run function