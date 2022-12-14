
// инкремент+ декремент-
// let x = 5; console.log( x++ ) //постфиксная форма возвращает старое значение

// постфиксная форма
// let y = 5; console.log( ++y ) //префиксная форма возвращает новое значение

// task 1
// string потому что когда мы работаем с пустым массивом он будет приведен к строковому типу данных
// console.log(typeof ([] + false)) // 'false'

// NaN потому что мы выполняем не математическую операцию
// console.log(typeof ([] + false - null + true)) // NaN

// task 3
// цепочка с право на лево
// let y = 1;
// let x = y = 2;
// console.log(x)

// task 4
// пустой массив, превращается в строку
// console.log(typeof ([] + 1 + 2))

// task 5 string потому что мы можем обратиться к каждому символу строки по его символу
// console.log("1"[0])

// task 6 && и то выражение верно и то верно  вернет первый попавшийся false. && всегда запинается на лжи
// console.log(2 && 1 && null && 0 && undefined)
// console.log(false && 1 && true && 0 && undefined)

// task 7
// восклицательные знаки приводят к type boolean
// console.log(( 1 && 2 ))
// console.log(( 0 && 0 ))
//
// console.log(!!( 1 && 2 ) === ( 1 && 2 ))

// task 8 или || запинается на правде

// console.log((null || 2 && 3 || 4 ))

// task 9
// const a = [1, 2, 3],
//     b = [1, 2, 3]
// console.log(a == b)

// task 10
// будет number потому тчо стоит унарный плюс
// console.log(typeof +'Infinity')

// task 11
// идет посимвольное сравнение Uni code в помощь
// console.log("Ёжик" > "яблоко")

// task 11
// || или запинается на правде
// console.log(0 || "" || 2 || undefined || true || false)