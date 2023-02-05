
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const res = [];
  let reverse = false;
  matrix.forEach(element => {
    if (reverse) res.push(...element.reverse());
    else res.push(...element);
    reverse = !reverse;
  });
  return res;
}
