/** JS in general */
const x = 1
let y = 5 // use let instead of var

console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
// cost can't be changed, let can also change type

/** Arrays */
const t = [1, -1, 3]

t.push(5) // adding to the array

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})        

const t = [1, -1, 3]

/** Creating a new array with the old elements and the new one
 * better function to use if you want the previous array to still exists
*/
const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed

/** Mapping 
 * Based on the old array, map creates a new array, for which the 
 * function given as a parameter is used to create the items.
*/

const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

/** Individual items of an array are easy to assign to variables
 * with the help of the destructuring assignment. */

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

/** Objects */

const object1 = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
}

const object2 = {
name: 'Full Stack web application development',
level: 'intermediate studies',
size: 5,
}

const object3 = {
name: {
  first: 'Dan',
  last: 'Abramov',
},
grades: [2, 3, 5, 3],
department: 'Stanford University',
}

// Referenced both ways
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

// Adding properties both ways
object1.address = 'Helsinki'
object1['secret number'] = 12341 // Because of space, this notation has to be used

/** Functions */

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  const square = p => p * p // Also valid function

  function product(a, b) {
    return a * b
  }
  const result = product(2, 6)

  // result is now 12

  // Calling a function
    const result = sum(1, 5)
    console.log(result)