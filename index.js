let mapToNegativize = (array) => {
   return array.map(n => {return n * -1})
}

let mapToNoChange = (array) => {
   return array.map(n => {return n})
}

let mapToDouble = (array) => {
   return array.map(n => {return n * 2})
}

let mapToSquare = (array) => {
   return array.map(n => {return n ** 2})
}

let reduceToTotal = (array,start = 0) => {
   return array.reduce((n,result) => {return result += n}, start)
}

let reduceToAllTrue = (array) => {
   return array.every(n => {return !!n})
}

let reduceToAnyTrue = (array) => {
   return array.some(n => {return !!n})
}
