function printName(name){
    console.log("Hello " + name);
  }
  
  setTimeout(printName, 2000, "Thundercat");
  setTimeout(printName, 1000, "Adele");
  setTimeout(printName, 3000, "Sade");

  function repeatMessage(){
    console.log("hey there! This message will be printed every second");
  }
  
  setInterval(repeatMessage, 2000); // calls repeatMessage() every 1000 milliseconds