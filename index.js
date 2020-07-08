// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(n => n * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(n => n);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(n => n * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(n => n ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    // let i = startingPoint
    const reducer = (accumulator, item) => {
        return accumulator + item
    }
    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray){
    const reducer = function(accumulator, currentValue){
        if(!!accumulator == true && !!currentValue == true) {
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    const reducer = function(accumulator, currentValue){
        if(!!accumulator == false && !!currentValue == false) {
            return false;
        } else {
            return true;
        }
    }
    return sourceArray.reduce(reducer, false)
}