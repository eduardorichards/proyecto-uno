const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir('.', (err, files) =>{
    if (err) {
        console.log('Error al leer el durectorio', err)
        return
    }
    files.forEach(file => {
        console.log(file)
    })
})