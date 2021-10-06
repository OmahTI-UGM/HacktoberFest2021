var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    var result = []
    for (x = 0; x < iterable.length; x++) {

        if (iterable[x] != iterable[x + 1]) {
            result.push(iterable[x])
        }
    }
    result.push[iterable.length - 1]
    return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // [ 'A', 'B', 'C', 'D', 'A', 'B' ]