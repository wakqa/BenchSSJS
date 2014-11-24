function qsort(a) {
    if (a.length == 0) return [];

    var left = [],
        right = [],
        pivot = a[5000];

    for (var i = 1; i < a.length; i++) {
        a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }
    return qsort(left).concat(pivot, qsort(right));
}

var time1 = function() {

        var a = [];
        for (var j = 0; j < 10000; ++j) {
            a.push(10000 - j);
        }

        return a;
};

var a = time1();
var t = new Date();
qsort(a);
var t2 = new Date();
t2 - t;