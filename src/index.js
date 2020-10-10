
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return []
  }
  else {
    matrix.forEach((item, index) => {
      if (index % 2 !== 0) {
        matrix[index].reverse();
      }
    });
    return [].concat.apply([], matrix);
  }
  
}
