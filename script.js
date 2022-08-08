// for (let i = 0; i < 3; i++) {
//     console.log('*')
//     for (let j = 0; j < 3; j++) {
//         console.log('*')
//         for (let c = 0; c < 3; c++) {
//             console.log('*')
//         }
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log('*')
// }


// homeWork repeat
// let result = ""
// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result)


// repeat

// let result = ""


// Mark repeat Перезапускает цикл  
// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`)
//         for (let k = 0; k < 5; k++) {
//             console.log(`Third level: ${k}`)
//              if (k === 4 ) continue first
//         }
//     }
// }


// Break repeat полностью останавливает цикл
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`)
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first
            console.log(`Third level: ${k}`)
        }
    }
}
