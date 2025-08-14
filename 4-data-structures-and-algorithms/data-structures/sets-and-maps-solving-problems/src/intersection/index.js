function intersection(a, b) {
    const interMap = new Map();
    const newSet = new Set();

    for (const item of a) {
        interMap.set(item, true);
    }   
    for (const item of b) {
        if (interMap.has(item)) {
            newSet.add(item);
        }
    }
    return Array.from(newSet);
}

module.exports = intersection;


//## Pseodocode

```
initialize a new Map
result = []
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the result array
return result
```