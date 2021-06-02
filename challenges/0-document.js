// TODO (Ex.0): document and write tests for this function
/**
 * Returns a negative version of a given number
 * @param {number} n - the number to turn negative
 * @returns {number} - negative of n
 */
function asNegative(n) {
//  if n is greater than 0
  if (n>0){
// 	return -n
    return -n
  }
//   else
  else {
//     return n
    return n
  }
}

console.log('asNegative(20)',asNegative(20), 'should be -20')
console.log('asNegative(-10)',asNegative(-10), 'should be -10')
console.log('asNegative(2.3)',asNegative(2.3), 'should be -2.3')
