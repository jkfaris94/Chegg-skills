// function split(text, separator):
//   // Inputs: text - the string to be split
//              separator - the character to be used to split the text

//   search for the first occurrence of the separator in the text
//   // Base case
//   if no separator is found then:
//      return [text]

//   // Recursive case
//   extract substring from character 0 to index of first occurrence of separator
//   extract rest of string from first occurrence of separator + 1 to end of string
//   recursively solve the rest of string
//   insert the substring in the resulting array
//   return the array

function split(text, separator) {
  // Find the index of the first occurrence of separator
  let index = text.indexOf(separator);

  // Base case
  if (index === -1) {
    return [text];
  }

  // Find the substrings
  let start = text.substring(0, index);
  let rest = text.substring(index + 1);

  // Recursive call
  let restSolution = split(rest, separator);

  // Insert the first substring
  restSolution.unshift(start);

  return restSolution;
}