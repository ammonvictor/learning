/* 
* Leason 6 video tutorials series [javavideotutorials: Youtube]
* Apply(ing) array object functions to function property 
* To develop a more flexible function and advanced functions i.e polymorphic
*/
var calculate = function () {
	/*
	* Pop called as though it part of the arguments name
	* arguments is an array
	*/
	var fn = Array.prototype.pop.apply(arguments);
	return fn.apply(null, arguments);
};

var sum = function () {
	var total = 0;

	// Instructor code has the incremental set to i = i + 1
	for (var i = 0, j = arguments.length; i < j; i++) { 
		total = total + arguments[i];
	}
	return total;
}

var diff = function () {
	var total = Array.prototype.shift.apply(arguments); 
	/*
	* Get the first elemnent of the arguments array
	* Instructor code has the incremental set to i = i + 1
	*/
	for (var i = 0, j = arguments.length; i < j; i++) { 
		total = total - arguments[i];
	}
	return total;
}
