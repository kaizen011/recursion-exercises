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