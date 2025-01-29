// create a promise object
let sayHello = new Promise(function (resolve, reject) {

    //in 5 seconds, resolve promise
    setTimeout(function () {
        resolve("hello, world");
    }, 5000);
});

// handle the promise once it resolves
sayHello.then(function (msg) {
    console.log(msg);
});