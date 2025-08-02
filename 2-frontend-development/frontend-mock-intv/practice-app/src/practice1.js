// Day 1: React Basics + Component Practice
// Topics: JSX, props, state, events
// Tasks:

// Build a Counter and Toggle component

// 🎯 Live Coding Challenge: GreetingCard

// Build a GreetingCard component that takes in a name prop and renders "Hello, [name]!"
// If no name is provided, render "Hello, Guest!"
// Pass the test:

// jsx
// Copy
// Edit
// <GreetingCard name="Alex" /> → "Hello, Alex!"  
// <GreetingCard /> → "Hello, Guest!"


function GreetingCard({name="Guest"}) {
    return <h1>Hello, {name}!</h1>; //return for multiple lines need the () for jsx    
}

export default GreetingCard;