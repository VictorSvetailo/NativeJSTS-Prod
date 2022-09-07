'use state'

// let man1 = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: 'Kate',
//         age: 22
//     }
// };
//
// console.log(man1)
//
// const man1CopyFaik = man1
//
// man1CopyFaik.name = 'Victor'
//
// const man1Copy = {
//     ...man1
// }
//
// man1Copy.age = 66
//
// man1Copy.father = {
//     name: 'Victor',
//     age: 27
// }
//
// man1Copy.mother.age = 20
//

const a = [{name: 'Victor', age: 26},{name: 'Kate', age: 22, work: {title: 'Designer'}},3,4,5,6]


const copyOriginal = JSON.stringify(a)
const copyMain = JSON.parse(copyOriginal)


copyMain[1].work.title = "Mother"

console.log(a)
console.log(copyMain)




// console.log(a)


let arrayCopy =  a.map(el => {
    return {
        ...el,
        work: {...el.work}
    }
})


arrayCopy[1].work.title = 'Programmer'


// console.log(a)
// console.log(arrayCopy)



    // console.log(cCopy)

let state = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 22,
        work: {
            title: 'Designer'
        }
    },
    father: {
        name: 'Victor',
        age: 27
    }
};


const b = {
    ...state,
    mother: {
        ...state.mother,
        work: {
            ...state.mother.work
        }
    }

}

b.name = 'Eva'
b.mother.age = 20


// console.log(state)
// console.log(b)
//
// console.log(b.name === state.name)
// console.log(b.mother === state.mother)



// const man1Copy = {
//     ...man1,
//     ...man1.father,
//     ...man1.mother,
// }
// console.log(man1Copy.mother === man1.mother)
// console.log(man1Copy.father === man1.father)

// man1Copy.mother = {
//     ...man1.mother
// }
// man1Copy.father = {
//     ...man1.father
// }

// man1Copy.father.age = 28


// console.log(man1)

// console.log(man1Copy === man1)
// console.log(man1Copy.father.age === man1.father.age)
// console.log(man1Copy.mother === man1.mother)

// console.log(man1Copy)



// const string = 'String bw empty and you dio not need tooo account for different data types.'


//
// function findShort(s){
//     s = s.split(' ')
//     let min = s[0];
//     for (const word of s) {
//         if (word.length < min.length) {
//             min = word;
//         }
//     }
//     return min.length
// }

// function findShort(s) {
//     let res = s.split(' ');
//     let a = Infinity;
//
//     for (let i = 0; i < res.length; i++) {
//         a = Math.min(res[i].length, a);
//     }
//     return a;
// }




console.log(findShort(string))




// const basicOp = (operation, value1, value2) => ({ '+': value1 + value2, '-': value1 - value2, '*': value1 * value2, '/': value1 / value2,}) [operation]


//     if (operation == '+'){
//         return value1 + value2
//     }
//     if (operation == '-'){
//         return value1 - value2
//     }
//     if (operation == '*'){
//         return value1 * value2
//     }
//     if (operation == '/'){
//         return value1 / value2
//     }
// }








// function smash (words) {
//     return words.join(' ')
// };
//
// console.log(smash(['hello', 'world', 'this', 'is', 'great']))


// function greet (name, owner) {
//     if (name === owner){
//         return str.toUpperCase()
//     } else {
//         return 'hello guest'
//     }
// }
//
//
// console.log(greet (Victor, boss))

// const readNumber = () => {
//     let num
//
//     do{
//       num =  prompt('Введите число!', 0)
//     } while (!isFinite(num))
//
//     if (num === null || num === '') return null
//     return +num;
// }
//
// console.log(readNumber())


// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber()}`);


// const oneNumber = prompt('Введите два числа через пробел!')
// let a
// const string = (str) => {
//     a = str.split(' ')
//     return a
//
// }
// string(oneNumber)
//
//
// let a1
// let a2
//
// const splitArray1 = (sa) => {
//     a1 = sa[0]
//     return a1
//
// }
// const splitArray2 = (sa) => {
//     a2 = sa[1]
//     return a2
// }
//
//
// splitArray1(a)
// splitArray2(a)
//
// console.log(a1, a2)
//
// let myNumber
//
// const count = (a, b) => {
//     myNumber = +a + +b
//     return myNumber
// }
// count(a1, a2)
//
// console.log(myNumber)
// alert(myNumber)

// function string(str) {
//     let word = str.split(' ')
//     return word
// }
// string("I love arrays they are my favorite")
//
// console.log()
//
//
// function updateLight(current) {
//     (current === yellow) ? return "green" : (current === green)
// //         ? return "red"
// // : current === "red"
// //         ? return "yellow"
// // : return current
// }
//
// //return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
//


// function booleanToString(b){
//     if(b){
//         return "true";
//     }else{
//         return "false";
//     }
// }
//
// console.log(booleanToString('fvfv'))


// const users = {
//     ivanov: {
//         age: 25,
//         parent: {
//             ignatenko1: {
//                 age: 27,
//             },
//             ivanov2: {
//                 age: 25,
//             },
//             koka3: {
//                 age: 23,
//                 parent: {
//                     age: 77,
//                     lola4: {
//                         petrov: {},
//                     },
//                     go: {
//                         age: 77,
//                         hiro: {},
//                         garbuz: {
//                             age: 77,
//                             parent: {
//                                 petrov: {},
//                             }
//                         }
//                     }
//                 }
//             }
//
//         },
//     },
//     kostenko: {
//         age: 99,
//         parent: {
//             karpov: {},
//             sniezko: {
//                 age: 1,
//                 parent: {
//                     petrov: {},
//                 }
//             }
//         }
//     }
// }
//
//
// function userParentRecursion(obj) {
//     if (obj.parent !== undefined) {
//         for (let key in obj.parent) {
//             console.log(key)
//             userParentRecursion(obj.parent[key])
//         }
//     }
// }
//
// for (let key in users) {
//     userParentRecursion(users[key])
// }
//

////

// let t = 0

// const recursion = () => {
//     t++;
//     console.log(t);
//     if (t === 100) {
//         return
//     }
//     recursion()
// }
//
// recursion()

// const recursion = () => {
//     let out = ''
//     for (let i = 1; i <= 100; i++) {
//         out += i + ' ';
//     }
//     console.log(out);
// }
//
// recursion()


///recursion

// let i = 0;
// let out = '';
//
// function f3() {
//     i++
//     out += i + ' ';
//     if (i >= 30) {
//         return
//     }
//     f3()
// }

//f3()
//console.log(out)

//

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
//
// }

//let s1 = 0
//let s = 300
// function moneyRecursion() {
//     let m = randomInteger(0, 100);
//     console.log('add: ' + m);
//     s1 += m
//     console.log('sum: ' + s1);
//     if (s1 > 300) return
//     moneyRecursion()
// }

//moneyRecursion()

// function moneyRepeat() {
//     let s1 = 0
//     while (true) {
//         let m = randomInteger(0, 100);
//         console.log('add: ' + m);
//         s1 += m
//         console.log('sum: ' + s1);
//         if (s1 >= 300) return
//     }
// }
// moneyRepeat()