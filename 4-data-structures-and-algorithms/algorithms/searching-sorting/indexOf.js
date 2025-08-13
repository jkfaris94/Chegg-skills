//classic example of a linear search algorithm is the indexOf()
function indexOf(isMatch, elements) {
  if (Array.isArray(elements)) {
    for (let index = 0, length = elements.length; index < length; index++) {
      if (isMatch(elements[index], index, elements)) {
        return index;
      }
    }
  }
  return -1;
}

module.exports = indexOf;