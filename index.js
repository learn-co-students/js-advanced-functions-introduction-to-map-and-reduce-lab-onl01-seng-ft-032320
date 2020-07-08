// '~e' below is an example of the bitwise operator it acts like 'e * -1' in this case
function mapToNegativize(sourceArray) {
    return sourceArray.map(e => ~e + 1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(e => e)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(e => e * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(e => e ** 2)
}

let reducer = ((acc, cur) => acc + cur)

function reduceToTotal(sourceArray, startingPoint) {
    if (startingPoint)
    return sourceArray.reduce(reducer, startingPoint)
    else
    return sourceArray.reduce(reducer)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((acc, cur) => {
        if (!!cur === true && !!acc === true) return true;
        return false;
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, cur) => {
        if (!!cur === false && !!acc === false) return false;
        return true;
    })
}






