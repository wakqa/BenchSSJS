﻿var time2 = function()
{
	var t = new Date();

	for (var i = 0; i < 100; ++i)
	{
		var a = [];
		for (var j = 0; j < 100000; ++j)
		{
			a[j] = j;
		}
	}
	var t2 = new Date();
	return t2-t;
};

var b = [];

for (var j = 0; j < 5; ++j) {
    b[j] = time2();
}

var c = 0;

for (var j = 0; j < 5; ++j) {
    c = b[j] + c;
}

c / 5;
