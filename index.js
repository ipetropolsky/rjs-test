const requirejs = require('requirejs');

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d.js'
});



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    exclude: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-exclude-b.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    excludeShallow: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-excludeShallow-b.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    stubModules: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-stubModules-b.js'
});



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    exclude: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-exclude-b.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    excludeShallow: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-excludeShallow-b.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    stubModules: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-stubModules-b.js'
});



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    exclude: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-exclude-a.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    excludeShallow: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-excludeShallow-a.js'
});

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    stubModules: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        console.log(moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-stubModules-a.js'
});
