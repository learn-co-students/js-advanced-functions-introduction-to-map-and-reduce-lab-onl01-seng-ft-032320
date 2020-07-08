// Your code here
function mapToNegativize(sourceArray){
    let product = sourceArray.map(element => element * -1)
    return product
}

function mapToNoChange(sourceArray){
    let product = sourceArray
    product.map(element => element * -1)
    return sourceArray
}

function mapToDouble(sourceArray){
    let product = sourceArray.map(element => element * 2)
    return product
}

function mapToSquare(sourceArray){
    let product = sourceArray.map(element => element ** 2)
    return product
}

function reduceToTotal(sourceArray, startingpoint){
    if(startingpoint){
   let sum = sourceArray.reduce((acc, val) => {
    return acc + val;
    
  },startingpoint)
  return sum 
}
   
let result = sourceArray.reduce((acc, val) => {
    return acc + val;
    
  })
  return result
}

function reduceToAllTrue(sourceArray){

    const reducer = function(total, amount){
        if(!!total === true && !!amount === true){
            return true
        }
        else {
            return false
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){

    const reducer = function(total, amount){
        if(total === true ){
            return true
        }
        else {
            return !!amount
        }
    }
    return sourceArray.reduce(reducer, false)

}

