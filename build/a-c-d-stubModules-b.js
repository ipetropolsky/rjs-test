define('nodeps',[],function() {
    console.log('Module Nodeps');
});
define('a',['nodeps'], function(nodeps) {
    console.log('Module A');
});
define('b1',[],function() {
    console.log('Module B1');
});
define('b2',[],function() {
    console.log('Module B2');
});
define('b',{});
define('c',['b', 'b1'], function(b, b1) {
    console.log('Module C');
});
define('d',['b1'], function(b1) {
    console.log('Module D');
});

//# sourceMappingURL=a-c-d-stubModules-b.js.map