// With destructuring and default arguments, set the variable PORT
// to be equal to whatever value is found inside of process.env or default to 5000.
const { PORT = 5000 } = ProcessingInstruction.env;

// The exported Express application is required.
const app = require("./app");

// This function will run when the server successfully starts.
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

// The listen() method enables the application to accept incoming network requests.
// When you invoke this method on your Express application instance, it instructs the underlying Node.js HTTP 
// server to start listening for requests on a specified port.
// This action effectively initializes the server, making your application accessible over the network. 
// The listen() method contains two arguments: a port number and a function.
// The PORT variable defines where your server is running, and the listener() function will get called as 
// soon as the server has successfully started.
app.listen(PORT, listener);