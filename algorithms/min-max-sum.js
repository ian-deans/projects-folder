arr = [ 1, 2, 3, 4, 5 ]


var smallest = Math.min.apply( Math, arr  )
var largest = Math.max.apply( Math, arr )

var smallSum = arr.reduce( ( sum, val, index ) => {
        if ( index !== arr.indexOf( largest ) ) {
            sum += val
        }
        return sum
    }, 0 )
    console.log( largest )
    
var largeSum = arr.reduce( ( sum, val, index ) => {
        if ( index !== arr.indexOf( smallest ) ) {
            sum += val
        }
        return sum
    }, 0 )
    
console.log( smallSum, largeSum )