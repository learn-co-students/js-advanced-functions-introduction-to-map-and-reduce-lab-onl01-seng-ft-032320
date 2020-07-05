// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num*num)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((total, num) => {
      return total += num
    }, startingPoint)
  }

  function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((result, obj) => {
        if (Boolean(obj)) {
            return true
        } else {
          return false
        }
    })
}

function reduceToAnyTrue(arr) {
    let result = []
  
    return arr.reduce((total, amount) => {
      
    if (Boolean(amount)) {
      result.push(amount);
    } 
    if (result.length > 0) {
      return true
    } else {
      return false
    }
    }, []);
  }