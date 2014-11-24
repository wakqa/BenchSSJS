var t = new Date();
var inc = require('increment').increment;
var a = 1;
for(var i = 0 ; i < 1000000; i++){
inc(a); // 2
}
var t2 = new Date();

t2 - t;