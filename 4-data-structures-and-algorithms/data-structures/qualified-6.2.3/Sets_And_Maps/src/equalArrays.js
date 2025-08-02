/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  if (a1.length !== a2.length) return false;

  const countMap = (arr) => {
    const map = new Map();
    for (const item of arr) {
      map.set(item, (map.get(item) || 0) + 1);
    }
    return map;
  };

  const map1 = countMap(a1);
  const map2 = countMap(a2);

  if (map1.size !== map2.size) return false;

  for (const [key, value] of map1.entries()) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}

module.exports = isEqual;
