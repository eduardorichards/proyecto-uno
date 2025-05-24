const fs = require("node:fs");

//metodo con callback para leer archivos dentro de la carpeta donde estamos
fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Error al leer el durectorio", err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});

//metodo con promises para leer archivos dentro de la carpeta donde estamos
const fs2 = require("node:fs/promises");

fs2.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.log("Error al leer el durectorio", err);
      return;
    }
  });
