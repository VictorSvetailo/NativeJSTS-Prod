
let a = 5,
    b = 5

b = b + 5

// console.log(a)
// console.log(b)
///
const test = {
    how: 'How are you?',
    welcome: 'Hello',
    object: {
        name: 'Victor',
        lastName: 'ava'
    }
}

const obj = {
    a: 5,
    b: 1,
}

const copy = {...obj}



// console.log(copy.c.x = 50)
// console.log('copy: ' + copy.c.x)
// console.log('obj: ' + obj.c.x)
// // console.log(obj.a = 20)
// console.log(obj === copy)

const ad = {}
const ac = {}

// объединить объекты
// console.log(Object.assign({}, obj))
const clone = Object.assign({}, obj)
clone.b = 20
console.log('obj: ' + obj.b)
console.log('clone: ' + clone.b)

console.log(obj === clone)
