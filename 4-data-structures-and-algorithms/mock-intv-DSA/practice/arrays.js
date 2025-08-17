const groceries = ['banana', 'apple', 'pear', 'orange'];

// console.log(groceries);
// groceries.push('yomama');
// console.log(groceries);

// console.log(groceries.length);

const person = {
    name: 'leonardo', 
    shirt: 'white'
}

// //. notation access
// console.log(person.name);
// console.log(person.shirt);

// //bracket notation
// console.log(person['name']);
// console.log(person['shirt']);

// // person.phone = '1-222-333-4444';
// person['phone'] = '1-222-333-4445';
// console.log(person.phone)

// const person2 = {
//     name: 'Qazi',
//     shirt: 'black'
// }

// console.log(person2)

const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 10000,
        liabilities: 5000,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi, my name is ${person.name} and my shirt is ${person.shirt} and my networth is 
    $${person.netWorth()} USD`

    return intro;
}

// console.log(introducer('johnny', 'gray'));

// const letterCounter = (phrase) => {
    
//     //counter
//     let result = 0;

//     for (const index in phrase) {
//         console.log(Number(index) + 1)
//         result = Number(index) + 1;
//     }

//     return { result }
// }

// const phrase = 'hey can you go to the grocery store sdf'
// console.log(letterCounter(phrase));

const sumArray = (numbers) => {
    let result = 0;

    //for loop
    for (const number of numbers) {
        console.log(number)
        result = result + number;
    }
    return { result }
}

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(sumArray(nums));

const letterFrequency = (phrase) => {

    console.log(phrase);

    //make frequency and object
    let frequency = {};

    
    for (const letter of phrase) {
        //check if letter exists in prequency
        if (letter in frequency) {
            //increment value by +1
            frequency[letter] = frequency[letter] + 1;
        } else {
            //otherwise, set value to 1
            frequency[letter] = 1;
        }
    }

    return frequency
}

// console.log(letterFrequency('haha, mamacita'));

const wordFrequency = (phrase) => {
    let frequency = {};
    const words = phrase.split(' ');
    
    for (const word of words) {
        console.log(word)
        if (word in frequency) {
            frequency[word]++
        } else {
            frequency[word] = 1;
        }
    } 
    return frequency
}

// console.log(wordFrequency('lol what lol mofacka yo yo yo'))

const betterWordFrequency = (phrase) => {
    const words = phrase.split(' ');
    return letterFrequency(words);
}

console.log(betterWordFrequency('lol what is up lol lol'));