function mapToNegativize(arr) {
    return arr.map(e => e * -1);
  };
  
  function mapToNoChange(arr) {
    return arr.map(e => e);
  };
  
  function mapToDouble(arr) {
    return arr.map(e => e * 2);
  };
  
  function mapToSquare(arr) {
    return arr.map(e => e ** 2);
  };
  
  
  function reduceToTotal(arr, start=0) {
    return arr.reduce((e, total) => (total += e) ,start)
  };
  
  function reduceToAllTrue(arr) {
    return arr.reduce((acc, val) => {
      if(!val) {
        acc = false
      }
      return acc;
    }, true)
  };
  
  function reduceToAnyTrue(arr) {
    return arr.reduce((acc, val) => {
      if(val) {
        acc = true
      }
      return acc;
    }, false)
  };