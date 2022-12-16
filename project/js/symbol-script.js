



//Получить Symbol можно при помощи метода в объекте
let id = Symbol("id")
const obj = {
    "name": "Test",
    [id]: 1,
    getId: function (){
        return this[id]
    }
}
// console.log(obj.getId())

// let id1 = Symbol("id")
// let id2 = Symbol("id")
// obj[id1] = 1
// obj[id2] = 1

// undefined потому что здесь мы обращаемся к свойству объекта именно через строчку
// console.log(obj[id])


console.log(obj[Object.getOwnPropertySymbols(obj)[0]])

// for (let value in obj){
//     console.log(value)
// }


