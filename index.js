// Your code here
function mapToNegativize(arr) {
    const results = [];
    arr.forEach(el => results.push(el * -1));
    return results;
}

function mapToNoChange(arr) {
    const results = [];
    arr.forEach(el => results.push(el));
    return results;
}

function mapToDouble(arr) {
    const results = [];
    arr.forEach(el => results.push(el*2));
    return results;
}

function mapToSquare(arr) {
    const results = [];
    arr.forEach(el => results.push(Math.pow(el,2)));
    return results;
}


function reduceToTotal(arr, starting) {
    let results = starting || 0;
    arr.forEach(el => results += el);
    return results;
}

function reduceToAllTrue(arr) {
    let results = true;
    arr.forEach(el => {
        if (!!el === false) {
            results = false;
        }
    })
    return results;
}

function reduceToAnyTrue(arr) {
    let results = false;
    arr.forEach(el => {
        if(!!el === true) {
            results = true;
        }
    })  
    return results;
}