const {cacheFunction} = require('../cacheFunction')

function callback(){
    return ('hi')
}

cacheFunction(callback)
console.log(store('1'))
console.log(store('1'))