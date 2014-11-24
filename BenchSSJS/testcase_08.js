

function selectionSort(sortMe)
{
    var i, j, tmp, tmp2;
      var t = new Date();
    for (i = 0; i < sortMe.length - 1; i++)
    {
        tmp = i;
        for (j = i + 1; j < sortMe.length; j++){
            if (sortMe[j] < sortMe[tmp]){
                tmp = j;
            }
        }
        if(tmp!=i){
            tmp2 = sortMe[tmp];
            sortMe[tmp] = sortMe[i];
            sortMe[i] = tmp2;
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
    
    selectionSort(a);
