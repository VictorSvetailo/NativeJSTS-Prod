'use strict'


//Получить Symbol можно при помощи метода в объекте
// let id = Symbol("id")
// const obj = {
//     "name": "Test",
//     [id]: 1,
//     getId: function (){
//         return this[id]
//     }
// }

// console.log(obj.getId())

// let id1 = Symbol("id")
// let id2 = Symbol("id")
// obj[id1] = 1
// obj[id2] = 1

// undefined потому что здесь мы обращаемся к свойству объекта именно через строчку
// console.log(obj[id])


// console.log(obj[Object.getOwnPropertySymbols(obj)[0]])

// for (let value in obj){
//     console.log(value)
// }

// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// const user = {
//     name: "Test",
//     lastName: 'Smith',
//     getId: function () {
//         return this[id]
//     }
// }
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Object.defineProperty(user, 'name', {writable: false})
// Object.defineProperty(user, 'gender', {value: 'male'})
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'))
// console.log(Object.isExtensible(user))
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// user.name = 'svs'

// console.log(user)

// iterator
// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function (){
//         console.log('Hello')
//     }
// }

// salaries[Symbol.iterator]= function (){
//     return {
//         current: this.john,
//         last: this.ann,
//
//         next(){
//             if (this.current < this.last){
//                 this.current = this.current + 500
//                 return {done: false, value: this.current}
//             } else {
//                 return {done: true}
//             }
//         }
//     }
// }
//
// const iterator = salaries[Symbol.iterator]()
// console.log(iterator.next())

// for (const salary of salaries) {
//     console.log(salary)
// }




