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
  

    //chaining promises example
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
      

        //using async/await 
        function fetchData() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const data = { id: 1, name: 'Example' };
                resolve(data);
              }, 1000);
            });
          }
          
          async function getData() {
            try {
              const result = await fetchData(); // Wait until the promise is fulfilled
              console.log(result); // { id: 1, name: 'Example' }
            } catch (error) {
              console.error(error);
            }
          }
          
          getData();
          
          //Handling Multiple Promises in Parallel
          function getPromise1() {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve('Promise 1 resolved');
              }, 1000);
            });
          }
          
          function getPromise2() {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve('Promise 2 resolved');
              }, 1500);
            });
          }
          
          Promise.all([getPromise1(), getPromise2()])
            .then((values) => {
              console.log(values); 
              // ["Promise 1 resolved", "Promise 2 resolved"]
            })
            .catch((error) => {
              console.error(error);
            });
          