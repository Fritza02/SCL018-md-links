import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

// función si es un directorio 
export const funcIsDirectory = (dirRoute) => {
    try {
        const stats = fs.statSync(dirRoute); // método que devuelve información sobre la ruta de archivo dada
        return stats.isDirectory(); // retorna true o false, dependiendo si es o no un directorio 
    } catch (e) {
        throw new Error('not a valid directory ' + dirRoute); // error
    }
};

// función si es un documento 
const funcIsMdFile = (filesRoute) => {
    const extName = path.extname(filesRoute); // retorna todo lo que está después del . 
    if (extName === '.md') {
        return true; // retorna true 
    } else {
        console.log('No es un archivo .md')
    }
};

// función para leer un directorio 
const funcReadDir = (folder, mdLinks) => {
    files = fs.readdirSync(folder); // método que lee sincronicamente el contenido de un directorio
    files.forEach(file => {
    const fullPath = path.join(folder, file); // método une todos los pathsegmentos dados utilizando el separador específico de la plataforma como delimitador y luego normaliza la ruta resultante.
    if (funcIsDirectory(fullPath)) {
        funcReadDir(fullPath, mdLinks);
    } else if (funcIsMdFile(fullPath)) {
        funcReadFile(fullPath, mdLinks);
    } 
    });
};

// función para almacenar links 
const linksMd = (file, files) => {
    const line = file.split('\n'); // separa en lineas el documento 
    let arrayLinks = [];
    for (let i=0; line.length > i; i++) {
        const lineI = line[i];
        const reguExpress = /(?<!\!)\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g // expresión regular que muestra el texto y los links
        const matchLinks = lineI.matchAll(reguExpress); // busca coincidencias 
        const testMatch = reguExpress.test(lineI); // true o false 
        if(testMatch) {
            for(const match of matchLinks) { // ejecuta un bloque de código para cada elemento
                var objMd = {
                    href: match[2],
                    text: match[1],
                    file: files,
                    line: i + 1,
                }
            } arrayLinks.push(objMd);
        }
    } return arrayLinks; 
};

// función para leer un documento 
const funcReadFile = (files, mdLinks) => {
    const file = fs.readFileSync(files, 'utf8');
    mdLinks.push(...linksMd(file, files)); // spread operator
};

// función inicial si es directorio o documento y engloba a todas las otras funciones
export const funcDirOrFile = (routeTotal, totalLinks) => {
    if(funcIsDirectory(routeTotal)) {
        funcReadDir(routeTotal, totalLinks);
    } else if(funcIsMdFile(routeTotal)) {
        funcReadFile(routeTotal,totalLinks);
    }
}; 

// función validar
export const validateArray = (arrLinks) => {
    const promises = arrLinks.map((object) => // crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    fetch(object.href) // método que regresa una promesa
        .then((res) => {
            // console.log('este es RES'+ res);
            return {
                href: object.href,
                text: object.text,
                file: object.file,
                status: res.status,
                statusText: res.statusText,
                };
            }) 
        .catch((err) => {
            // console.log(err);
            return  {
                href: object.href,
                text: object.text,
                file: object.file,
                status: 404,
                statusText: 'Fail',
            }
        }));
    return Promise.all(promises);
}; 

//función status 
export const statsArray = (validateOpt) => {
    let objStats = {}
    objStats.Total = validateOpt.length;
    objStats.Unique = 0;
    const uniqueLinks = new Set(); // Objeto que permite almacenar valores únicos de cualquier tipo
    validateOpt.forEach(obj => {
    uniqueLinks.add(obj.href);
    });
    objStats.Unique = uniqueLinks.size; // devuelve el número de elementos que hay en el objeto Set.
    return objStats;
};


// función validar y status 
export const validateStats = (arrayLinks) => {
    return Promise.resolve(
validateArray(arrayLinks)
    .then(validatedArr=>{
        let objeValStat = {};
        objeValStat.Total = validatedArr.length;
        objeValStat.Unique = 0;
        objeValStat.Broken = 0;
        const uniqueLinks = new Set();
        validatedArr.forEach(obj => {
            uniqueLinks.add(obj.href);
            if (obj.status === 404) {
                objeValStat.Broken += 1;
            }
        });
        objeValStat.Unique = uniqueLinks.size;
        return objeValStat;
    })
    .catch(err=>console.log('Error de validate stats' + err)))
}




