/* module.exports = () => {
  // ...
}; */

// Para leer archivo
let fs = require('fs');
// Trabaja con directorios y rutas de archivos
const path = require('path');
// Libreria para validar

const example1 = path.isAbsolute('/Users/Documents/ProyectosLaboratoria/SCL018-md-link');
const example2 = path.isAbsolute('Documents/ProyectosLaboratoria/SCL018-md-link');
console.log("example" ,example1); //true
console.log("example" ,example2); // false

// función que lee archivo y verifica que sean .md 
const readFiles = (files) => {
  const extName = path.extname(files);
  return new Promise((resolve, reject) => {
    if (extName !== '.md') {
      reject('No hay archivos .md/ No .md files here');
    } else {
      // lee el archivo 
      fs.readFile(files, 'utf8', (err, data) => {
        if (err) {
          reject(err.message);
        } else {
          const splitLines = data.split('\n');
          /*links = data.matchAll(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gi); */
          resolve(splitLines);
        }
      });
    }
  });
};

/* const likeArray = readFiles();
console.log(likeArray); */






readFiles('readme.md').then( (response) => {
  console.log(response);
  })
  .catch
  /* var url = "bla.com"
  if (validUrl.isUri(url)){
      console.log('URL valida');
  } 
  else {
      console.log('URL no valida');
  } */