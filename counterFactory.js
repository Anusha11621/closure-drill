function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let count = 3
    
    let obj = {
      increment : count => count+1,
      decrement : count => count-1
    }
    return[obj.increment(count),obj.decrement(count)]
}

module.exports = {counterFactory}