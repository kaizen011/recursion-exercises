// Here I'll provide a solution for each exercise


// 1st 
function sumRange(x){
    if(x == 1){
        return x;
    }
    else{
        return x + sumRange(x -1);
    }
}


// 2nd 
function power(base, exponent){
    if(exponent == 1){
        return base;
    }
    else{
        return base * power(base, exponent - 1);
    }
}


// 3rd
function factorial(x){
    if(x == 1){
        return x;
    }
    else{
        return x * factorial(x - 1);
    }
}


// 4th
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

// 5th

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60


function productOfArray(array){
    if(array.length === 0) return 1;
    else{
        return array.shift() * productOfArray(array);
    }
}


//6th

function contains(object, searchValue) {
    if (typeof object !== "object" || object === null) {
      return object === searchValue;
    }
  
    for (const value of Object.values(object)) {
      if (contains(value, searchValue)) {
        return true;
      }
    }
    return false;
  }