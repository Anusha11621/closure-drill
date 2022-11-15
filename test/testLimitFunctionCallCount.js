const {limitFunctionCallCount} = require('../limitFunctionCallCount')

function callback(){
    console.log ('MB')
}

limitFunctionCallCount(callback,3)()