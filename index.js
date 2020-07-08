//bitwise (~) operator or use e * -1
function mapToNegativize(sourceArray) {
   return sourceArray.map(e => ~e + 1) 
}

// just for the sake of using .map?
function mapToNoChange(sourceArray) {
    return sourceArray.map(e => e)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(e => e * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(e => e ** 2)
}

const reducer = (accumulator, item) => {
    return accumulator + item;
  }

function reduceToTotal(sourceArray, startingPoint){
    if (startingPoint){
        return sourceArray.reduce(reducer, startingPoint)
    }
        return sourceArray.reduce(reducer)
}

const reducerTwo = (accumulator, currentValue) => {  
    if(!!accumulator === true && !!currentValue === true){
        return true;
    } 
        return false;
}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(reducerTwo)
}

const reducerThree = (accumulator, currentValue) => {  
    if(!!accumulator === false && !!currentValue === false){
        return false;
    } 
        return true;
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce(reducerThree)
}


