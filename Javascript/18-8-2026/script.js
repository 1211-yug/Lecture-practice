// Async await

/* then,catch,finally */

// async function Pro() {
//     console.log("Async Function");
//     return Promise.reject("Operation failed....")
// }

// Pro().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Operation Complete.");
// })

/* ------------------------ */
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved......")
//     }, 2000);
// })

// const asyncFunc = async () => {
//     let result = await promise;

//     console.log(result);
//     console.log("Hello");
// }

// asyncFunc()

/* ------------------------ */
// callback hell
// console.log("Getting Data 1.......");
// getData(1, () => {
//     console.log("Getting Data 2.......");
//     getData(2, () => {
//         console.log("Getting Data 3......");
//         getData(3, () => {
//             console.log("Getting Data 4......");
//             getData(4, () => {
//                 console.log("Getting Data 5......");
//                 getData(5, () => {
//                     console.log("Getting Data 6......");
//                     getData(6, () => {
//                         console.log("Getting Data 7......");
//                         getData(7, () => {
//                             console.log("Getting Data 8......");
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// Error Handling
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved.....")
        // reject("Promise reject.....")
    }, 2000)
})

const asyncFunc = async () => {
    try {
        let result = await promise;
        console.log(result);
        console.log("Hello, Javascript!!");
    } catch (err) {
        console.log(err);
    }
}

asyncFunc()

