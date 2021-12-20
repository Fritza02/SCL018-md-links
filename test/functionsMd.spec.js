import {funcIsDirectory} from '../functionsMd.js'

describe('funcIsDiretory', () => {
    it('retorna TRUE si el parametro es una ruta a un directorio', () => {
        const result = funcIsDirectory('./carpetaPrueba');
    });
    
    it('retorna FALSE si el parametro es una ruta a un archivo', () => {
    });
})

