// Your code 



function mapToNegativize(sourceArray){
    let newArray = []
    for(const e of sourceArray){
      newArray.push(e * - 1 )
    }
    return newArray
  }


  function mapToNoChange(dune){
      return dune
  }

  function mapToDouble(sourceArray){
    let newArray = []
    for(const e of sourceArray){
      newArray.push(e * 2 )
    }
    return newArray
  }

  
  function mapToSquare(sourceArray){
    let newArray = []
    for(const e of sourceArray){
      newArray.push(e **2 )
    }
    return newArray
  }


  function reduceToTotal(sourceArray, startingPoint=0){
      let newValue = startingPoint
      for (const e of sourceArray) {
          newValue = newValue + e
      }
      return newValue
  }

  function reduceToAllTrue(sourceArray) {
    let newValue = []
    for (const e of sourceArray) {
        if (e){
            newValue.push(!!e)
        }
    }
    if (newValue.length === sourceArray.length){
        return true
    } else {
        return false 
    }
        
  }


  function reduceToAnyTrue(sourceArray) {
    for (const e of sourceArray) {
        if (e){
            return true 
        }
    }
    return false    
  }

  