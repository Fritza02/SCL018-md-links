import {funcIsMdFile,funcIsDirectory,validateArray,linksMd} from '../index.js'
import {mdLinks} from '../mdLinks.js'

describe("linksMd", () => {
    it("should be a function", () => {
    expect(typeof linksMd).toBe("function");
    });
    it("should return an array", () => {
    const path = "readme.md";
    const result = linksMd(path);
    expect(result).toBeInstanceOf(Array);
    });
});

describe("validateArray", () => {
    it("should be a function", () => {
    expect(typeof validateArray).toBe("function");
    });
    it("should return a promise", () => {
    const path = "readme.md";
    const result = mdLinks(path);
    expect(result).toBeInstanceOf(Promise);
    });
});
describe('funcIsMdFile', () => {
    it('should be a function', () => {
    expect(typeof funcIsMdFile).toBe('function');
    });

    it('should return true', () => {
    const result = funcIsMdFile('readme.md');
    expect(result).toBeTruthy();
    });
});
describe('funcIsDirectory', () => {
    it('should be a function', () => {
        expect(typeof funcIsDirectory).toBe('function');
    });

    it('should return true', () => {
        const result = funcIsDirectory('./carpetaPrueba');
        expect(result).toBeTruthy();
    });
    
});
