array = [1];
var toa = 0;
var l = array.length;
var temp = [];

function push(data){
	array[toa] = data;
	toa++;

	if(toa == array.length){
		array = temp
	}
}