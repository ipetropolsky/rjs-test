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

