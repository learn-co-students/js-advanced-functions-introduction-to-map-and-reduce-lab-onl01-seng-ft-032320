// Your code here

function mapToNegativize(source) {
    let newSource = []
    source.forEach(num => newSource.push(num * -1))
    return newSource
}


function mapToNoChange(source) {
    let newSource = []
    source.forEach(num => newSource.push(num))
    return newSource
}

function mapToDouble(source) {
    let newSource = []
    source.forEach(num => newSource.push(num * 2))
    return newSource
}

function mapToSquare(source) {
    let newSource = []
    source.forEach(num => newSource.push(num ** 2))
    return newSource
}

function reduceToTotal(source, start=0) {
    source.forEach(num => start += num)
    return start
}

function reduceToAllTrue(source) {
    let status = true
    source.forEach(thing => {
      if (!thing) {
        status = false
        }})            
    return status
}
 function reduceToAnyTrue(source) {
    let status = false
    source.forEach(thing => {
        if (thing) {
        status = true
        }})            
    return status
}
