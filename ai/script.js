function add(a, b) {
    return a + b;
}
 
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., a network request)
    setTimeout(() => {
      const success = true;
  
      if (success) {
        resolve('The operation was successful!');
      } else {
        reject('Something went wrong...');
      }
    }, 1000);
  });
  
  // Consume the promise
  myPromise
    .then((result) => {
      console.log(result); // "The operation was successful!"
    })
    .catch((error) => {
      console.error(error);
    });
  

    //chaining promises
    const firstPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve('First promise resolved');
        }, 1000);
      });
      
      firstPromise
        .then((message) => {
          console.log(message); // "First promise resolved"
          return 'Passing data to the next then'; 
        })
        .then((nextMessage) => {
          console.log(nextMessage); // "Passing data to the next then"
          // We can return a new promise or just a simple value
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('Chained promise resolved');
            }, 1000);
          });
        })
        .then((chainedMessage) => {
          console.log(chainedMessage); // "Chained promise resolved"
        })
        .catch((error) => {
          console.error(error);
        });
      