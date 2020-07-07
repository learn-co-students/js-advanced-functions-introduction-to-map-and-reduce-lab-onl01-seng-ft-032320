// Your code here
function mapToNegativize(sourceArray){
   return sourceArray.map(index => index * -1)
}


function mapToNoChange(sourceArray){
   return sourceArray.map(index => index)
}

function mapToDouble(sourceArray){
   return sourceArray.map(index => index * 2)
}

function mapToSquare(sourceArray){
   return sourceArray.map(index => Math.pow(index, 2))
}



function reduceToTotal(sourceArray, startingPoint = 0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let total = sourceArray.reduce(reducer, startingPoint);
    return total
  }

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
        return false
        }
  }
  return true
}

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
        return true
        }
  }
  return false
} 
  
// function reduceToAnyTrue(sourceArray){
//    trueArray = []  
//    falseArray = [] 
//   for (let i = 0; i < sourceArray.length; i++) {
//         if (sourceArray[i] != true) {
//         falseArray.push(sourceArray[i])
//         }
//          if (sourceArray[i] != false) {
//           trueArray.push(sourceArray[i])
//         } 
//   }
//   if (trueArray.count > 0){
//     return true
//   }
//   if (falseArray.count > 0){
//     return false
//   }
// }   
