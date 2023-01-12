'use strict'


// let age = 26
// console.log('запрос данных')
//
//
//
//
//
// const req = new Promise(function (resolve, reject) {
//     setTimeout(()=>{
//         console.log('подготовка данных...')
//         const product = {
//             name: 'TV',
//             price: 2000
//         }
//         resolve(product)
//
//     },2000)
// }).then((product) => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             product.status = 'order'
//             reject()
//             // resolve(product)
//         },2000)
//     })
// }).then(res =>{
//     res.modify = true
//     return res
// }).then(res=>{
//     console.log(res)
//     console.log('Данные получены')
// }).catch(error=>{
//     console.error('Произошла ошибка')
// }).finally(res =>{
//     console.log('В итоге я хочу мороженное')
// })

const test = time => {
        return new Promise((resolve) => {
            setTimeout(()=> resolve(),time)
        })
}

// test(1000).then(()=> console.log('1000ms'))
// test(3000).then(()=> console.log('3000ms'))


Promise.all([test(1000), test(3000)]).then(()=>{
    console.log('Выполнено')
})

// Promise.race([test(1000), test(3000)]).then(()=>{
//     console.log('Race')
// })


