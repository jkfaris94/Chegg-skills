/**
 * return the union of two sets
 */
function union(s1, s2) {
  return new Set([...s1, ...s2]);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  return new Set([...s1].filter(item => s2.has(item)));
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  return new Set([...s1].filter(item => !s2.has(item)));
}

module.exports = { union, intersect, difference };
