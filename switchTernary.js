//SWITCH
//Question 1
// create a variable called num that generates a random number between 0-5

    let num =  (Math.floor(Math.random * 5 + 1));
    
    switch (num) {
        case 0:
            console.log("The first recorded zero appeared in Mesopotamia around 3 B.C");
            break;
        case 1:
            console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an “aggregate of units”, so numbers began at Two.");
            break;
        case 2:
            console.log("Two is for me and you.");
            break; 
        case 3:
            console.log("We live on the 3rd planet from the sun.");
            break;
        default:
            console.log("Larger than 4.")
    }
    
//Question 2
// a) for this switch statement, you will use Date().getMonth()
// b) for each case console.log someone's birthday for that month 
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let d = new Date();
let name = month[d.getMonth()];
    console.log(name);


    switch (name) {
        case 'January':          
            console.log("Happy Birthday Hung");
            break;
        case 'February':   
            console.log("Happy Birthday Arthur");
            break;
        case 'March':
            console.log("Happy Birthday Lavender");
            break;
        case 'April':
            console.log("Happy Birthday Leji");
            break;
        case 'May':
            console.log("Happy Birthday Lola");
            break;
        case 'June':
            console.log("Happy Birthday Thy");
            break;
        case 'July':
            console.log("Happy Birthday Dad");
            break;
        case 'August':
            console.log("Happy Birthday Mom");
            break;
        case 'September':
            console.log("Happy Birthday Honey");
            break;
        case 'October':
            console.log("Happy Birthday Pinky");
            break;
        case 'November':
            console.log("Happy Birthday Bear");
            break;
        case 'December':
            console.log("Happy Birthday Vicky");
            break;
        default:
            console.log("Hmm, you have no birthday month.")
    }


//TERNARY
//Convert to Ternary Operator

// if ( condition ) {
//     value if true;
//     } else {
//     value if false;

// condition ? value if true: value if false

//Question 1
// let person = {
//     name: 'tony',
//     age: 20,
//     driver: null
//     };
//     if (person.age >= 16) {
//     person.driver = 'Yes';
//     } else {
//     person.driver = 'No';
//     }

person.driver = person.age >= 16 ? 'Yes': 'No';

//Question 2
// var age = 7;
// var kindergarten_eligible;
// if (age > 5) {
// kindergarten_eligible = "Old enough";
// }
// else {
// kindergarten_eligible = "Too young";
// } 

kindergartenEligible = age > 5 ? "Old Enough": "Too Young";