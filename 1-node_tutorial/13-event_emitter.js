const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,age) => {
   console.log(`data received user: ${name}, ${age}`)
})

customEmitter.on('response',() =>{
   console.log('some other logic here')
})

customEmitter.emit('response','joao',30)