// быстро создать объект с большим количеством свойств

// let a = {}
// for (let i = 0; i < 1000; i++){
//     a[i]= 'yo'
// }




// цикл для созданию копии объекта
const obj = {
    a: 5,
    b: 1
}
function copyObj(mainObj){
    let objCopy = {}
    for(let key in mainObj) {
        objCopy[key] = mainObj[key]
    }
    return objCopy
}

// copyObj(obj)
// console.log(objCopy === obj)
// console.log()

// цикл по созданию копии объекта
const numbers = {
    a: 10,
    b: 5,
    c: {
        d: 11,
        g: 12
    }
}

console.log(numbers)

const newNumbers = copyObj(numbers)
newNumbers.c.g = 20

console.log(newNumbers)
