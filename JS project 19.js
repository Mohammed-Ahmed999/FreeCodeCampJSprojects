function smallestMult(n) {
  
  let returnVal = 0
  let shouldContinu = true
  let currentIndex = 1

  while(shouldContinu){
    currentIndex++
    if( canBeDividedByAll(1, n, currentIndex) ) {
      shouldContinu = false
      returnVal = currentIndex
    }
  }
  console.log('final value to return '+returnVal)
  return returnVal
}

function canBeDividedByAll( start, end , numberToCheck){
  let returnVal = true


  for(let i = start; i <= end; i++){
    if(numberToCheck % i !== 0) {
      returnVal = false
      break
    }
  }
  //console.log('>> checking number: '+ numberToCheck + ' and return : '+ returnVal)
  return returnVal
}

smallestMult(13);