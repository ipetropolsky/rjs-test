const requirejs = require('requirejs');

let logs = {};
function log(name) {
    logs[name] = logs[name] || [];
    logs[name].push(Array.prototype.slice.call(arguments, 1));
}
function printLog(name) {
    console.log("\nLog for " + name);
    for (var i = 0; i < logs[name].length; i++) {
        console.log.apply(console, logs[name][i]);
    }
}

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-c-d.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d.js'
}, () => printLog('build/a-c-d.js'));



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    exclude: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-c-d-exclude-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-exclude-b.js'
}, () => printLog('build/a-c-d-exclude-b.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    excludeShallow: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-c-d-excludeShallow-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-excludeShallow-b.js'
}, () => printLog('build/a-c-d-excludeShallow-b.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'c', 'd'],
    stubModules: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-c-d-stubModules-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-c-d-stubModules-b.js'
}, () => printLog('build/a-c-d-stubModules-b.js'));



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    exclude: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-b-c-d-exclude-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-exclude-b.js'
}, () => printLog('build/a-b-c-d-exclude-b.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    excludeShallow: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-b-c-d-excludeShallow-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-excludeShallow-b.js'
}, () => printLog('build/a-b-c-d-excludeShallow-b.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['a', 'b', 'c', 'd'],
    stubModules: ['b'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/a-b-c-d-stubModules-b.js', moduleName, filePath);
        return contents;
    },
    out: 'build/a-b-c-d-stubModules-b.js'
}, () => printLog('build/a-b-c-d-stubModules-b.js'));



requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/b-c-d.js', moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d.js'
}, () => printLog('build/b-c-d.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    exclude: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/b-c-d-exclude-a.js', moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-exclude-a.js'
}, () => printLog('build/b-c-d-exclude-a.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    excludeShallow: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/b-c-d-excludeShallow-a.js', moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-excludeShallow-a.js'
}, () => printLog('build/b-c-d-excludeShallow-a.js'));

requirejs.optimize({
    baseUrl: 'src',
    generateSourceMaps: true,
    optimize: 'none',
    include: ['b', 'c', 'd'],
    stubModules: ['a'],
    onBuildRead: (moduleName, filePath, contents) => {
        log('build/b-c-d-stubModules-a.js', moduleName, filePath);
        return contents;
    },
    out: 'build/b-c-d-stubModules-a.js'
}, () => printLog('build/b-c-d-stubModules-a.js'));
