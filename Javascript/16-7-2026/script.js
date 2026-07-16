// Math methods

// abs()
// negitive value ne postive ma batave.
console.log("===== abs() =====");

{
    function num(a, b) {
        return Math.abs(a - b)
    }

    console.log(num(12, 10));
}

// ceil()
// (.) point pachi ne value noj number output ma batave.
console.log("===== ceil() =====");

{
    let num = Math.ceil(10.3)

    console.log(num);
}

// floor()
console.log("===== floor() =====");

{
    let num = Math.floor(10.4)

    console.log(num);
}

// PI()
console.log("===== PI() =====");

{
    let num = Math.PT

    console.log(num);
}

// max()
console.log("===== max() =====");

{
    let num = Math.max(12, 45, 123, 567, 1, 64, 8)

    console.log(num);
}

// min()
console.log("===== min() =====");

{
    let num = Math.min(122, 5, 93, 37, 10, 6, 18)

    console.log(num);
}

// pow()
console.log("===== pow() =====");

{
    let num = Math.pow(12, 3)

    console.log(num);
}

// random()
console.log("===== random() =====");

{
    let num = Math.floor(Math.random() * 10000)

    console.log(num);
}

// round()
console.log("===== round() =====");

{
    let num = Math.round(10.6)

    console.log(num);
}

// sign()
console.log("===== sign() =====");

{
    let num = Math.sign(-1)

    console.log(num);
}

// sqrt()
console.log("===== sqrt() =====");

{
    let num = Math.sqrt(625)

    console.log(num);
}

//  cos()
console.log("===== cos() =====");

{
    let num = Math.cos(90 * Math.PI / 180).toFixed(10)

    console.log(num);
}

// sin()
console.log("===== sin() =====");

{
    let num = Math.sin(90 * Math.PI / 180).toFixed(10)

    console.log(num);
}

// tan()
console.log("===== tan() =====");

{
    let num = Math.tan(90 * Math.PI / 180).toFixed(10)

    console.log(num);
}

// log() | log2() | log10()
console.log("===== log() | log2() | log10() =====");

{
    let num1 = Math.log(10)
    let num2 = Math.log2(12)
    let num3 = Math.log10(36)

    console.log(num1, num2, num3);
}

