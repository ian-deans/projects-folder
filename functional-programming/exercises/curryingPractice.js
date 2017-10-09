import _ from 'lodash'

// let dragon =
//   name =>
//     size =>
//       element =>
//   name + ' is a ' + size + ' dragon that breathes ' + element
let dragon = ( name, size, element ) =>
name + ' is a ' + size + ' dragon that breathes ' + element

dragon = _.curry(dragon)

let fluffyDragon = dragon('fluffy')
let tinyDragon = fluffyDragon('tiny')



// console.log( dragon( 'dood', 'large', 'music')  )

console.log( tinyDragon('lightning') )
