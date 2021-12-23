#!/usr/bin/env node
import { mdLinks } from './mdLinks.js'
import pathLib from 'path';

const path = process.argv[2];
let firstOption = process.argv[3];
let secondOption = process.argv[4];
let threeOptions = process.argv[5];
//ruta relativa a absoluta
let dirPath = pathLib.resolve(path);

let options = {
    validate: false,
    stats: false
};

if (
    (firstOption === '--validate' && secondOption === '--stats') ||
    (firstOption === '--stats' && secondOption === '--validate') ||
    (threeOptions === '--validate--stats')
) {
    options.validate = true;
    options.stats = true;
} else if (firstOption === '--validate') {
    options.validate = true;
    options.stats = false;
} else if (firstOption === '--stats') {
    options.validate = false;
    options.stats = true;
} else if (threeOptions === '--validate --stats'){
    options.validate = true;
    options.stats = true;
}

mdLinks(dirPath, options)
    .then(file => {
    console.log(file);
    })
    .catch(err => console.log('error', err));