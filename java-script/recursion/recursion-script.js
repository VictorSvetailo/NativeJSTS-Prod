//
// const sum = (a, b) => {
//     if (b === 1) {
//         return a
//     } else {
//         let res = a * sum(a, b - 1)
//         return res
//     }
// }

// sum(2, 2) // 4
// sum(2, 3) // 8
// sum(2, 4) // 16
// sum(2, 5) // 32
// sum(2, 6) // 64
// sum(2, 7) // 128


// let students = {
//     js: [
//         {name: 'John', progress: 100},
//         {name: 'Ivan', progress: 60}
//     ],
//     html: {
//         basic: [
//             {name: 'Peter', progress: 20,},
//             {name: 'Ann', progress: 18,}
//         ],
//         pro: [
//             {name: 'Sam', progress: 10,}
//         ],
//         semi:
//             {
//                 stud:
//                     [{name: 'Sam', progress: 10}]
//             },
//     }
// }


// function getTotalProgressByIteration(data){
//     let total = 0
//     let students = 0
//     for (let course of Object.values(data)){
//         // console.log(course)
//         if (Array.isArray(course)){
//             // console.log(course)
//             students += course.length;
//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)){
//                 students += subCourse.length
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }
//     return total / students
// }


function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress
        }
        return [total, data.length]
    } else {
        let total = [0, 0]
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData)
            total[0] += subDataArr[0]
            total[1] += subDataArr[1]
        }
        return total
    }
}

const result = getTotalProgressByRecursion(students)

console.log(result[0] / result[1])

// console.log(getTotalProgressByIteration(students))


// const test = Object.values(students)
// console.log(Array.isArray(test))

// const test = Object.values(students).map(p => p.)
// console.log(students)
// console.log(test)

// let stop = 0
// let res
// const sum = (a, b) => {
//     if (a == a) {
//         res = a
//     }
//     stop++
//     if (stop === b) {
//         console.log('stop')
//         console.log(res)
//         return res
//     }
//     res *= a
//     sum(a, b)
// }


// let stop = 0
// const sum = (a, b) => {
//     let res = a
//     const sum2 = (a, b) => {
//         stop++
//         if (stop === b){
//             console.log('stop')
//             console.log(res)
//             return res
//         }
//         res *= a
//         sum2(a, b)
//     }
//     sum2(a, b)
// }
//

// возведение в степень
// const sum = (a, b) => {
//     let test = a
//     for (let i = 1; i < b; i++) {
//         test *= a
//     }
//     console.log(test)
//     return test
// }
//
// sum(2, 0) // 4
// sum(2, 1) // 4
// sum(2, 2) // 4
// sum(2, 3) // 8
// sum(2, 4) // 16
// sum(2, 5) // 32
// sum(2, 6) // 64
// sum(2, 7) // 128