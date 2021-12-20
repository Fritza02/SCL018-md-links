import { funcDirOrFile, validateArray, statsArray, validateStats } from './functionsMd.js';

const mdLinks = (fullPath, options = { validate: false, stats: false}) => {
    return new Promise((resolve, reject) => {
    let totalMdLinks = [];
    funcDirOrFile(fullPath, totalMdLinks);
    if (totalMdLinks.length > 0) {
        if (!options.validate && options.stats) {
            resolve(validateArray(totalMdLinks))
        } else if (options.validate && !options.stats) {
            resolve(statsArray(totalMdLinks));
        } else if (!options.validate && !options.stats) {
            validateStats(totalMdLinks)
            .then(r=>console.log(r))
        }
    }
    else {
        reject(new Error('couldn\'t find any link'));
    } 
}).catch((err) => { console.log('This is why totalMdLinks fails: ' + err)});
};
    mdLinks('./carpetaPrueba/archivoPrueba.md',{ validate: false, stats:false}).then((results)=> {
        console.log(results);
        }) 
        