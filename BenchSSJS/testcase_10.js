function shellSort (a) {
	
	var t = new Date()
    for (var h = a.length; h = parseInt(h / 2);) {
        for (var i = h; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= h && k < a[j - h]; j -= h)
                a[j] = a[j - h];
            a[j] = k;
        }
    }
    var t2 = new Date();
    return t2 - t;
}

var time1 = function() {
	
            var a = [];
            for (var j = 0; j < 10000; ++j) {
                a.push(10000- j);
            }
        
		return a;
    };
    
    var a = time1();
    
shellSort(a);
