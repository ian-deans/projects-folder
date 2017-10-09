var list = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'Rust' },
];

const countLanguages = list => {
  let node = {}

  
  list.map( dev => {
    if ( node[dev.language] ){
      node[dev.language] += 1
    } else {
      node[dev.language] = 1
    }
  })

  console.log( node )
  return node
}

countLanguages(list)
