
let str = 'some'
let strObj = new String(str)
//
// console.log(typeof str)
// console.log(typeof strObj)

// console.dir([1,2,3])


const soldiers = {
    health: 400,
    armor: 100,
    sayHello: ()=>{
        console.log('Hello')
    }
}
// создаем прототип наследования от солдата
const jonh = Object.create(soldiers)

// const jonh = {
//     health: 100,
// }
// jonh.__proto__= soldiers
// Установили прототип от jonh к soldeiers в динамике
// Object.setPrototypeOf(jonh, soldiers)


console.log(jonh.sayHello())