import {funcIsDirectory, funcIsMdFile} from '../functionsMd.js'

describe('funcIsDiretory', () => {
    it('retorna TRUE si el parametro es una ruta a un directorio', () => {
        const result = funcIsDirectory('./carpetaPrueba');
    });
    
    it('retorna FALSE si el parametro es una ruta a un archivo', () => {
        const result = funcIsDirectory('readme.md');
    });
})

describe('funcIsMdFile', () => {
    it('retorna TRUE si el parametro es una ruta a un archivo', () => {
        const result = funcIsMdFile('readme.md');
    });
    
    it('retorna FALSE si el parametro es una ruta a un directorio', () => {
        const result = funcIsMdFile('./carpetaPrueba');
    });
})
