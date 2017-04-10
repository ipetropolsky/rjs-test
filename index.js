const fs = require('fs');
const path = require('path');

const requirejs = require('requirejs');

let logs = {};

function log(name, message) {
    logs[name] = logs[name] || [];
    logs[name].push(message);
}

function writeLog(name) {
    let result = '';
    for (var i = 0; i < logs[name].length; i++) {
        result += `${logs[name][i]}\n`;
    }
    fs.writeFileSync(`build/${name}.log`, result);
}

function runBuild(config) {
    let name = JSON.stringify(config).replace(/[^a-z0-9]+/ig, '-').replace(/^-|-$/g, '');
    let baseConfig = {
        baseUrl: 'src',
        generateSourceMaps: true,
        optimize: 'none',
        onBuildRead: (moduleName, filePath, contents) => {
            let relativePath = path.relative(process.cwd(), filePath)
            log(name, `Read module "${moduleName}" from ${relativePath}`);
            return contents;
        },
        out: `build/${name}.js`
    };
    for (var key in config) {
        baseConfig[key] = config[key];
    }
    requirejs.optimize(baseConfig, () => writeLog(name));
}


runBuild({
    include: ['a', 'c', 'd'],
});

runBuild({
    include: ['a', 'c', 'd'],
    exclude: ['b', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['a', 'c', 'd'],
    excludeShallow: ['b', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['a', 'c', 'd'],
    stubModules: ['b', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['b', 'c', 'd'],
});

runBuild({
    include: ['b', 'c', 'd'],
    exclude: ['a', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['b', 'c', 'd'],
    excludeShallow: ['a', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['b', 'c', 'd'],
    stubModules: ['a', 'nodeps', 'nodefine'],
});

runBuild({
    include: ['c', 'd'],
});

runBuild({
    include: ['c', 'd'],
    exclude: ['nodeps', 'nodefine'],
});

runBuild({
    include: ['c', 'd'],
    excludeShallow: ['nodeps', 'nodefine'],
});

runBuild({
    include: ['c', 'd'],
    stubModules: ['nodeps', 'nodefine'],
});
