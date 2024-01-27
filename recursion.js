// Here I'll provide a solution for each exercise

function sumRange(x){
    if(x == 1){
        return x;
    }
    else{
        return x + sumRange(x -1);
    }
}

function power(base, exponent){
    if(exponent == 1){
        return base;
    }
    else{
        return base * power(base, exponent - 1);
    }
}