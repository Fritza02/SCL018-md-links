import { funcDirOrFile, validateArray, statsArray, validateStats } from './index.js';

export const mdLinks = (fullPath, options) => {
    return new Promise((resolve, reject) => {
    let totalMdLinks = [];
    funcDirOrFile(fullPath, totalMdLinks);
    if (totalMdLinks.length > 0) {
        if (options.validate === true && options.stats === false) {
            resolve(validateArray(totalMdLinks))
        } else if (options.validate === false && options.stats === true) {
            resolve(statsArray(totalMdLinks));
        } else if (options.validate === true && options.stats === true) {
            validateStats(totalMdLinks)
            .then(r=>console.log(r))
        }
    }
    else {
        reject(new Error('couldn\'t find any link'));
    } 
}).catch((err) => { console.log('This is why totalMdLinks fails: ' + err)});
};
        