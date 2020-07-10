function mapToNegativize(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = 0 - arr[i]
    }
    return arr2
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = 2 * arr[i]
    }
    return arr2
}

function mapToSquare(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i] ** 2
    }
    return arr2
}

function reduceToTotal(arr, start = 0) {
    let result = start
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

function reduceToAllTrue(arr) {
    let result = true
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {

        } else {
            result = false
            break
        }
    }
    return result
}

function reduceToAnyTrue(arr) {
    let result = false
    for (var i = 0; i < arr.length; i++) {
        if (!!arr[i]) {
            result = true
            break
        }
    }
    return result
}
