
// const user = {
//     4: "Test",
//     lastName: 'Smith',
//     ann: 5000,
//     sayHello: function (){
//         console.log('Hello')
//     }
// }
//
// const userMap = new Map(Object.entries(user))
// console.log(userMap)
//
// const newUserObject = Object.fromEntries(userMap)
// console.log(newUserObject)


//  user

// console.log(typeof(Object.keys(user)[0]))


// const shops = [{rice: 500}, {oil: 200}, {bread: 50},]
//
// const map = new Map([
//     [{paper: 400}, 8000]
// ])
//
// // вариант цикл
// // let sum = [5000, 6000, 7000]
// // for (let i = 0; i < 3; i++) {
// //     map.set(shops[i], sum[i])
// // }
// // вариант forEach
// const budget = [5000, 6000, 7000]
// shops.forEach((shops, i)=> {
//     map.set(shops, budget[i])
// })

// const goods = []
// for (const shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods)

// for (const price of map.values()) {
//     console.log(price)
// }

// for (const [price, shop] of map.entries()) {
//     console.log(price, shop)
// }

// map.forEach((value, key, map)=>{
//     console.log(key, value)
// })


// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000)

// const mapItem = map.get(shops[0])
// console.log(mapItem)

// существует ли объект?
// const mapTrue = map.has(shops[0])
// console.log(mapTrue)

// map.delete(key)
// map.clear()
// map.size


