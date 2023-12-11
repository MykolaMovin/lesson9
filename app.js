// Practical task 1
function getPromise(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(data => console.log(data));

// Practical task 2
function calcArrProduct(arr){
    return new Promise(resolve => {
        let product = 1;
        for (let element of arr) {
            if (typeof obj !== 'number') throw new Error(' Error! Incorrect array! ');
            product *= obj;
        };
        resolve(product);
    });
}

calcArrProduct([3, 4, 5]).then(console.log);
calcArrProduct([5, "user2", 7, 12]).then(console.log);