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


// 6th

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


// Fibonacci Sequence

// Iterative Approach
function fibs(n){
    let array = [0,1];

    for(let i = 2; i <= n; i++){
        let result = array[i-1] + array[i-2];
        array.push(result);    
    }
    return array;
}

// Recursive Approach
function fibs(n){
let fibArray = [];

    function generateFibs(index){
         if (index == 0){
            fibArray.push(0);
            }
            else if(index == 1){
                fibArray.push(0,1);
            }
            else{
                generateFibs(index-1);
                fibArray.push(fibArray[index - 1] + fibArray[index -2]);
            }
       }

generateFibs(n);
return fibArray;

}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
  
  }
  
  printList(list);