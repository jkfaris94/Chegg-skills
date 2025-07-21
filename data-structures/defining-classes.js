//You can use the keyword class to define a new class. The class definition starts like this:
class Event {
  // A constructor is a special function that defines how a new instance of the class is created
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
}

//To create a new instance of the Event class, you can use the new keyword and invoke the Event
const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunch);

const dinner = new Event("Dinner", "18:00", "19:30", "Olive Garden");
console.log(dinner);



// Exampample that demonstrates the use of conditional statements inside the constructor:
class Event2 {
  constructor(name, attendees, startTime, locationName, address) {
    let guests = null;
    if (attendees.length === 1) {
      guests = attendees[0];
    } else if (attendees.length > 1) {
      guests = `${attendees.length} attendees`;
    }

    this.name = guests ? `${name} with ${guests}` : name;
    this.details = { startTime, attendees, groupSize: attendees.length };
    this.location = { name: locationName, address };
  }
}

const event2 = new Event2("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");
console.log(event2);


// Defining a class with a method:
class Event3 {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
    // A method is a function that is defined inside a class
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }
}

const lunchEvent = new Event3("Lunch", "12:00", "15:00", "Chipotle");
console.log(lunchEvent.toString());


// Defining methods with parameters
class Event4 {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }
  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }

  // Helper methods that will be used to compare events
  getStartHours() {
    return Number(this.startTime.split(":")[0]);
  }
  getStartMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  getEndHours() {
    return Number(this.endTime.split(":")[0]);
  }
  getEndMinutes() {
    return Number(this.endTime.split(":")[1]);
  }

  isBefore(other) {
    return this.getEndHours() < other.getStartHours() || (
        this.getEndHours() === other.getStartHours() &&
        this.getEndMinutes() <= other.getStartMinutes()
      );
  }
}

const lunchEvent4 = new Event4("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunchEvent4.getStartHours()); // > 12
console.log(lunchEvent4.getStartMinutes()); // > 0

console.log(lunchEvent4.getEndHours()); // > 13
console.log(lunchEvent4.getEndMinutes());

const meeting = new Event4("Meeting", "14:00", "15:30", "Conference room");

console.log(lunchEvent4.isBefore(meeting)); //> true
console.log(meeting.isBefore(lunchEvent4)); // > false
console.log(lunchEvent4.isBefore(lunchEvent4)); // > false

//Using getters to simplify the code:
// Getters allow you to define a method that can be accessed like a property
// This can make your code cleaner and easier to read
// Here is how you can use getters to simplify the previous example:
// Note: The getters are defined using the get keyword, and they can be accessed like properties
// This means you can use them without parentheses, making the code more concise and readable
// class Event {
//   constructor(name, startTime, endTime, location) {
//     // ...
//   }
//   toString() {
//     // ...
//   }
//   get startHours() {
//     return Number(this.startTime.split(":")[0]);
//   }
//   get startMinutes() {
//     return Number(this.startTime.split(":")[1]);
//   }
//   get endHours() {
//     return Number(this.endTime.split(":")[0]);
//   }
//   get endMinutes() {
//     return Number(this.endTime.split(":")[1]);
//   }
//   isBefore(other) {
//     return (
//       this.endHours < other.startHours ||
//       (this.endHours === other.startHours &&
//         this.endMinutes <= other.startMinutes)
//     );
//   }
// }