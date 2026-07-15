// Map()

console.log("===== Map() =====");

{
    let student = new Map([['name', 'Yug'], ['age', 19], ["GRID", 10278], ['course', 'full stack developer']])

    console.log(student);

    // set()
    // new value
    console.log("===== set() =====");

    student.set('year', '1.5')
    console.log(student);

    // get()
    // return a key value
    console.log("===== get() =====");

    console.log(student.get('GRID'));

    // has()
    // return a boolean value
    console.log("===== has() =====");

    let result = student.has("year");
    console.log(result);

    // delete()
    console.log("===== delete() =====");

    student.delete('year')
    console.log(student);

    // size
    console.log("===== delete() =====");

    console.log(student.size);

    // entries()
    console.log("===== entries() =====");

    let mapent = student.entries()

    console.log(mapent.next().value);
    console.log(mapent.next().value);
    console.log(mapent.next().value);
    console.log(mapent.next().value);

    // keys()
    console.log("===== keys() =====");

    let mapkey = student.keys()

    console.log(mapkey.next().value);
    console.log(mapkey.next().value);
    console.log(mapkey.next().value);
    console.log(mapkey.next().value);

    // values()
    console.log("===== values() =====");

    let mapval = student.values()

    console.log(mapval.next().value);
    console.log(mapval.next().value);
    console.log(mapval.next().value);
    console.log(mapval.next().value);

}


// Set Object

console.log("===== Set Object =====");

let set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8])
let set2 = new Set([1, 2, 3, 4, 5, 6, 9, 10])

// difference()
console.log("===== difference() =====");

console.log(set1.difference(set2));
console.log(set2.difference(set1));

// intersection()
console.log("===== intersection() =====");

console.log(set1.intersection(set2));
console.log(set2.intersection(set1));

