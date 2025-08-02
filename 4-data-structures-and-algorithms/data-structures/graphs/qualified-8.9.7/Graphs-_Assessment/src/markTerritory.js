function markTerritory(map, sr, sc, newTerrainType) {
  const originalType = map[sr][sc];
  if (originalType === newTerrainType) return map;

  const rows = map.length;
  const cols = map[0].length;

  function dfs(r, c) {
    if (
      r < 0 || r >= rows ||
      c < 0 || c >= cols ||
      map[r][c] !== originalType
    ) return;

    map[r][c] = newTerrainType;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return map;
}

module.exports = markTerritory;
