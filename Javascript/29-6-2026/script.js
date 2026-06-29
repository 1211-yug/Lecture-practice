/* Javascript Operators */

/* Arithmetic Operators */

console.log("<<<==== Arithmetic Operators ====>>>");

let a = 8;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(++a);
console.log(--a);
console.log(b++);
console.log(b--);

/* Assignement Operators */

console.log("<<<==== Assignement Operators ====>>>");

let c = 6;

c += 6;
console.log(c);

c -= 3;
console.log(c);

c *= 4;
console.log(c);

c /= 12;
console.log(c);

c %= 3;
console.log(c);

c **= 3;
console.log(c);

/* Comparison Operators */

console.log("<<<==== Comparison Operators ====>>>");

let d = 10;
let e = 12;

console.log(d == e); // only for value
console.log(d === e); // check for value and datatype
console.log(d != e);
console.log(d !== e);
console.log(d > e);
console.log(d >= e);
console.log(d < e);
console.log(d <= e);

/* logical Operators */

console.log("<<<==== logical Operators ====>>>");

let per = 50;
let pass = "pass";
let fail = "fail";

result = per <= 70 && pass || fail;

console.log(result);


/* Task */

// console.log("<<<<<< Task 1 >>>>>>");

// let check = prompt("Enter Odd Even Number");
// let OddEven;

// if (check % 2 === 0) {
//     OddEven = "Odd";
// } else {
//     OddEven = "Even";
// }

// console.log(check, "Number is =", OddEven);



// console.log("<<<<<< Task 2 >>>>>>");

// let score = prompt("Enter your score (0-100):- ");
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score <= 89) {
//     grade = "B";
// } else if (score >= 70 && score <= 79) {
//     grade = "C";
// } else if (score >= 60 && score <= 69) {
//     grade = "D";
// } else if (score >= 40 && score <= 59) {
//     grade = "E";
// } else {
//     grade = "Fail";
// }

// console.log("Your Grade is = ", grade);



console.log("<<<<<< Task 3 >>>>>>");

console.log("Press 1 for Deposit");
console.log("Press 2 for Withdraw");
console.log("Press 3 for Balance");

let balance = 1000;
let pnum = Number(prompt("Enter a number (1-3):"));

switch (pnum) {

    case 1:
        let deposit = Number(prompt("Enter Deposit Amount:"));
        balance += deposit;

        console.log("Deposit :-", deposit);
        console.log("Current Balance :-", balance);
        break;

    case 2:
        let withdraw = Number(prompt("Enter Withdraw Amount:"));

        if (withdraw <= balance) {
            balance -= withdraw;

            console.log("Withdraw :-", withdraw);
            console.log("Current Balance :-", balance);
        } else {
            console.log("Insufficient Balance");
        }
        break;

    case 3:
        console.log("Your Balance is :-", balance);
        break;

    default:
        console.log("Invalid Choice");
}

