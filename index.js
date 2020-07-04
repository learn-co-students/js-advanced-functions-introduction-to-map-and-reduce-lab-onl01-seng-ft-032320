// Your code here

let mapToNegativize = (array) => {
   return array.map(el => {return el * -1})
}

let mapToNoChange = (array) => {
   return array.map(el => {return el})
}

let mapToDouble = (array) => {
   return array.map(el => {return el * 2})
}

let mapToSquare = (array) => {
   return array.map(el => {return el ** 2})
}

let reduceToTotal = (array,start = 0) => {
   return array.reduce((el,result) =>{
      return result += el
   }, start)
}

let reduceToAllTrue = (array) => {
   return array.every(el => {return !!el})
}

let reduceToAnyTrue = (array) => {
   return array.some(el => {return !!el})

}
