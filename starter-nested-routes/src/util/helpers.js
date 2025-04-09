function capitalizePostTitle(title) {
  const words = title.split(" ");
  return words
    .reduce((acc, word, index) => {
      let result = word;
      if (word.length > 2 || index === 0) {
        result = word[0].toUpperCase() + word.slice(1);
      }

      acc.push(result);
      return acc;
    }, [])
    .join(" ");
}

function sortByLastName(a, b) {
  const [_aFirst, aLast] = a.name.split(" ");
  const [_bFirst, bLast] = b.name.split(" ");

  if (aLast[0] < bLast[0]) {
    return -1;
  } else if (aLast[0] > bLast[0]) {
    return 1;
  } else {
    return 0;
  }
}

export { capitalizePostTitle, sortByLastName };
