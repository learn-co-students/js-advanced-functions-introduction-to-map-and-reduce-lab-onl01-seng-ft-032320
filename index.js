// Your code here

// map

const mapToNegativize = function(sourceArray) {
  return sourceArray.map(x => -+ x);
};

const mapToNoChange = function(sourceArray) {
  return sourceArray.map(x => x);
};

const mapToDouble = function(sourceArray) {
  return sourceArray.map(x => 2 * x);
};

const mapToSquare = function(sourceArray) {
  return sourceArray.map(x => x * x);
};


// reduce

//const reduceToTotal = sourceArray.reduce(function(total, startingPoint=0) {return startingPoint + total})

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
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