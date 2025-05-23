import os, { release } from 'os'

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)