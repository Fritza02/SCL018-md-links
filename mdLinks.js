import { funcDirOrFile, validateArray, statsArray, validateStats } from './functionsMd.js';

/* const mdLinks = (fullPath, options = { validate: false, stats: false}) => {
    return new Promise((resolve, reject) => {
    let totalMdLinks = [];
    funcDirOrFile(fullPath, totalMdLinks);
    if (totalMdLinks.length > 0) {
        if (!options.validate && options.stats) {
            validateArray(totalMdLinks)
            .then((results) => {
            resolve(results);
        });
        } else if (options.validate && !options.stats) {
            // resolve(statsArray(totalMdLinks));
            statsArray(totalMdLinks)
            .then((result) => {
                resolve(result);
            })
        } else if (!options.validate && !options.stats) {
            resolve (validateStats(totalMdLinks));
        }
    }
    else {
        reject(new Error('couldn\'t find any link'));
    }
});
}; */
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
            resolve (validateStats(totalMdLinks));
        }
    }
    else {
        reject(new Error('couldn\'t find any link'));
    }
});
};
    var myfunc = mdLinks();
    myfunc.then(function () {
        console.log("Promise Resolved");
    }).catch(function () {
        console.log("Promise Rejected");
    });

    mdLinks('./carpetaPrueba/archivoPrueba.md',{ validate: false, stats:false}).then((results)=> {
        console.log(results);
        })
        