define('nodeps',{});
define('a',{});
define('b1',[],function() {
    console.log('Module B1');
});
define('b2',[],function() {
    console.log('Module B2');
});
define('b',['nodeps', 'a', 'b1', 'b2'], function(nodeps, a, b1, b2) {
    console.log('Module B');
});
define('c',['b', 'b1'], function(b, b1) {
    console.log('Module C');
});
define('d',['b1'], function(b1) {
    console.log('Module D');
});

//# sourceMappingURL=b-c-d-stubModules-a-nodeps.js.map