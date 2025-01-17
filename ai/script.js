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
  