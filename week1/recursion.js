//write a recursive function to see if a given number is even or not

function isEven(N) {
    if (N == 0) {
        return true;

    }
    if (N == 1)
        return false;
    if (N < 0)
        return isEven(-N);
    return isEven(N - 2);
}
console.log(isEven(-4));