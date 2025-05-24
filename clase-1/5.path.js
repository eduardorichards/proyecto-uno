const path = require('node:path')

// preguntar barra separadora segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt')

console.log(filePath)