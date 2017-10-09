function solution(A, B, M, X, Y) {
    var stops = 0, elevatorQueue = [], loadSize = 0, loadWeight = 0
    while ( A.length > 0 ) {
        elevatorQueue = []
        loadSize = 0
        loadWeight = 0
        while ( loadSize < X && A[0] < y -loadWeight ) {
            let dest = 0
            loadSize++
            loadWeight += A.shift()
            dest = B.shift()
            if ( !elevatorQueue.includes( dest ) ) {
                elevatorQueue.push( dest )
            }
        }
        stops += elevatorQueue.length
    }
    return stops
}

([100, 120, 137, 155, 400, 212, 110, 90, 95, 87, 40], [30,6,46,25,32,18,13,13,3, 23,50], 50, 6, 1000)
(
    [
        100, 120, 137, 155, 400, 212, 110, 90, 95, 87, 40,100, 120, 137, 155, 400, 212, 110, 90, 95, 87, 40,100, 120, 137, 155, 400, 212, 110, 90, 95, 87, 40,
    ], 
    [
        30,6,46,25,32,18,13,13,3,23,50,30,6,46,25,32,18,13,13,3, 23,50,30,6,46,25,32,18,13,13,3
    ], 
    50, 6, 1000)