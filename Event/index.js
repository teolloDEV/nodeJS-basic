const EventEmitter = require('events')



const makeCoffe = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat`)
}

const myEventEmitter = new EventEmitter();
myEventEmitter.on('coffe', makeCoffe)
myEventEmitter.emit('coffe', { name: 'Arabica' })