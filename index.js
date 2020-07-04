// Your code here

function mapToNegativize(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * (-1))
    }

    return newArr
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }

    return newArr
}

function mapToSquare(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }

    return newArr
}


// function reduceToTotal(arr, sta = 0) {
//     let num = Number();

//     for (let i = 0; i < arr.length; i++) {
//         num += arr[i]
//     }
//     return num
// }

function reduceToTotal(arr, sta = 0) {
    let num = Number();

    for (let i = 0; i < arr.length; i++) {
        num += arr[i]
    }
    return num + sta

}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
}