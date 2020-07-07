// Your code here
const ary = [1, 2, 3, -9]

function mapToNegativize(ary) {
    
    return ary.map( a => a*-1)
}

function mapToNoChange(ary) {
    return ary.map(a => a);
}

function mapToDouble(ary) {
    return ary.map(a => a * 2);
}

function mapToSquare(ary) {
    return ary.map(a => a ** 2);
}

const sourceArray = [1,2,3]


function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(a,b) {
        return a + b}, startingPoint)
    }

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
        if (src[i]) return true
    }
    return false
}