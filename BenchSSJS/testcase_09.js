
function bubbleSort(a)
{
    var swapped;
     var t = new Date();
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
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
    
bubbleSort(a);