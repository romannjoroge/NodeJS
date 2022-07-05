const square_root = (x, epsillon) =>{
    /*
        x : number to find square root of
        epsillon: the accuracy of the answer

        Function accepts a number and finds square root to given accuracy
    */
    
    // Uses high and low to calculate a guess for square root
    var high = x
    var low = 0
    var guess = (high + low) / 2
    
    // As long as the accuracy of the given guess is below desired accuracy the function continues using
    // bisection search to find a better guess of the square root
    while (Math.abs(x - guess ** 2) > epsillon){
        guess = (high + low) / 2
        if (guess ** 2 > x){
            high = guess
        }
        else if(guess ** 2 < x){
            low = guess
        }
    }
    console.log(guess)
}

// Sharing square_root function
module.exports = square_root