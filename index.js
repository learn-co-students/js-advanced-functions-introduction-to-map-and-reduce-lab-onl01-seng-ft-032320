// Your code here

function mapToNegativize(array) {
    let negative = []
    for (let i = 0; i < array.length; i++) {
        negative.push(array[i] * -1)
    }
    return negative
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let double = []
    for(let i = 0; i < array.length; i++) {
        double.push(array[i] * 2)
    }
    return double
}

function mapToSquare(array) {
    let square = []
    for(let i = 0; i < array.length; i++) {
        square.push(array[i] ** 2)
    }
    return square
}

function reduceToTotal(array, starting = 0) {
    let total = starting
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {return false}
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {return true}
    }
    return false
}


