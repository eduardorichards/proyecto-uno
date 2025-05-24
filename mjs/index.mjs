import {sum} from './sum.mjs'

console.log(sum(3,4))

const os = require('node:os')
console.log('INformación del sistema operativo')
console.log('----------------------')
console.log('Nombre del sistema operativo'. os.platform())
