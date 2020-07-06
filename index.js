// Your code here
 function mapToNegativize(array) {
   let reverseNum = [];
   array.forEach(num => {
    reverseNum.push(num * -1)
   })
   return reverseNum;
 }

 function mapToNoChange(array) {
   let sameArray = array;
   return sameArray;
 }

 function mapToDouble(array) {
  let doubleNum = [];
  array.forEach(num => {
   doubleNum.push(num * 2)
  })
  return doubleNum;
 }

 function mapToSquare(array) {
  let squareNum = [];
  array.forEach(num => {
   squareNum.push(num ** 2)
  })
  return squareNum;
 }


 function reduceToTotal(array, startPoint=0) {
   array.forEach(num => {
     startPoint += num;
   })
   return startPoint;
 }

 function reduceToAllTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) return false;
  }
  return true;
}


function reduceToAnyTrue(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return true;
  }
  return false;
}

//  reduceToAllTrue returns true when all values are truthy
//    3) reduces correctly
//  reduceToAllTrue returns false when any value is falsy
//    4) reduces correctly

//  reduceToAnyTrue returns true when a true value is present
//    5) reduces correctly
//  reduceToAnyTrue returns false when no true value is present
//    6) reduces correctly