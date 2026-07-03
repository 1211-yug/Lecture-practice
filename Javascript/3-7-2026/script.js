// 1. Declaration Function

function addNumbers(a, b, c) {
    return a + b + c;
}
console.log(addNumbers(10, 20, 30));

// 2. Expression Function

{
    const Mul = function (a, b) {
        return a * b
    }

    console.log(Mul(20, 20));
}

// 3. Anonymous Function

{
    setTimeout(function () {
        console.log("Hello, My Name is Yug Patel");
    }, 1000)
}

{
    setTimeout(function () {
        console.log("I am Full Stack Developer");
    }, 2000)
}

// 4. Named Function Expression

{
    const factorial = function fact(num) {
        return num <= 1 ? 1 : num * fact(num - 1)
    }

    console.log(factorial(5));
}

// 5. Arrow Function

const oddEven = (n) => {
    if (n % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};

const square = (oddEven(12));

// 6.  IIFE (Immediately Invoked Function Expression)

