console.log('Booo CB');
const EventEmitter = require('events').EventEmitter;

const producer = (input)=> {

    return new Promise((resolve,reject)=>{
        setTimeout(
            () => resolve(input * 10)
        , 3000 * Math.random())
    })

}

//----------------------------

const consumer = value => {
    console.log('result', value);
    return value;
}

const logger = value => {
    console.log('logger', value);
    return value;
}


producer(20)
    .then(consumer)
    .then(logger)
    .then( data => console.log( '🦄'.repeat(data)))
