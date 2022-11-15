
function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    
  return function callcount(){
    if (n === 0){
      return null
    }
    else{
      n --;
       
    }
    return cb(callcount())
  }
}
module.exports = {limitFunctionCallCount}