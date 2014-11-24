
function insertionSort(items) {

    var len     = items.length,   
        value,                    
        i,                        
        j;                         
    
     var t = new Date();
    for (i=0; i < len; i++) {

        value = items[i];

        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
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
    
    insertionSort(a);