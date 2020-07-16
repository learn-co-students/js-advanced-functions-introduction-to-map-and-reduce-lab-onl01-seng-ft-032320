// Your code here

function mapToNegativize(array) {
    return array.map(element => element * -1);
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    return array.map(element => element * 2);
}

function mapToSquare(array) {
    return array.map(element => element * element);
}

function reduceToTotal(array, startingPoint) {
    return array.reduce(function(total, element) {
        if (startingPoint) {
            total += startingPoint/2;
        }
        return element + total});
}

function reduceToAllTrue(array) {
    return array.reduce(function(total, element) {
        for (let i = 0; i < array.length; i ++) {
            if (element == false) {
                return false;
            }
        }
        return true;
    });
}

function reduceToAnyTrue(array) {
    return array.reduce(function(total, element) {
        for (let i = 0; i < array.length; i ++) {
            if (element == true) {
                return true;
            }

        }
        return false;
    });
}


