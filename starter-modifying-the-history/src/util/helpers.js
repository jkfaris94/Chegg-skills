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

export { sortByLastName };
