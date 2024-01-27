// Here I'll provide a solution for each exercise

function sumRange(x , n){
    if(x == 1){
        return x;
    }
    else{
        return x * sumRange(x, n-1);
    }
}