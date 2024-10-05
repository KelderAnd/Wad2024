let userName = "Andrew";
let userAge = 21;
console.log(userName);
console.log(userAge);



//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName);
console.log("User Age", userAge);

let userPets =["cats", "dogs"];
console.log(userPets);

let userBalance = 1200;

const EVERY_DAY_SPENDING = 15.3;

let everyDaySpendingPerPet = 2.4;
    daysSurvived = 0;

console.log("User Pets", userPets);
console.log("User Balance", userBalance);
console.log("Everyday Spending Per Pet", everyDaySpendingPerPet);
console.log("Days Survived", daysSurvived);

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log(name);
    console.log(name.length);

    for(let i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
// Sarah for example
nameVertical("Sarah");

function code(n) {
    return           (n < 100)? "Not a valid code" :
    (n >= 100 && n <= 199)? "Informational responses":
    (n>= 200 && n <= 299)? "Successful responses":
    (n >= 300 && n <= 399)? "Redirection messages":
    (n >= 400 && n <= 499)? "Client error responses":
    (n >= 500 && n <= 599)? "Server error responses":
    (n > 599) ? "Not a valid code": "other";

 }
// for example n = 121
console.log(code(50));

function compareVariables(var1, var2) {
    console.log("var1", var1);
    console.log("var2", var2);

    if(var1 === var2) {
        console.log(" The two variables have the same value and type");
    } else if (var1 == var2) {
        console.log("The two variables have the same value but not the same type");
        console.log("var1", typeof var1);
        console.log("var2", typeof var2);
    } else {
        console.log("The two variables do not have the same value nor the smae type")
    }
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables ("3", 3);

function fibonacci(n) {
    let firstNum = 0,
        secNum = 1,
        sum;

    sum = firstNum + secNum;

    console.log(firstNum);
    console.log(secNum);
    console.log(sum);
    
    while (sum < n) {
        firstNum = secNum;
        secNum = sum;

        sum = firstNum, secNum;
    }
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(10);