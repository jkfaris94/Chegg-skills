function characterConcordance(data) {
    const results = {};

    //loop through characters 
    data.forEach((str) => {
        for (let i = 0; i < str.length; i++) {
            const char = str[i].toLowerCase();

            //skip spaces
            if (char === ' ') continue;

            // if we havent seen this char yet, inititalize with empty array
            if (!results[char]) {
                results[char] = [];
            }

            //add the index position
            results[char].push(i);
        }
    });

    return results;


}




const data = ["hello world"]


console.log(characterConcordance(data));