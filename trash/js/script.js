'use strict'





// var name = "Joe"
// var i = 0;
//
//
// while (i < 2) {
//     i = i + 1;
//     document.write("Happy Birthday to you.<br> <hr>")
// }
// document.write("Happy Birthday dear " + name + ",<br>")
// document.write("Happy Birthday to you.<br>")
//
//
// var word = "bottles";
// var count = 99;
// while (count > 0) {
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer,");
//     console.log("Take one down, pass it around,");
//     count = count - 1;
//     if (count > 0) {
//         console.log(count + " " + word + " of beer on the wall.");
//     } else {
//         console.log("No more " + word + " of beer on the wall.");
//     }
// }

// const yourLevel = 0
// console.log(1000 + +'108')
//
// let plus = 10
// while (plus > 1) {
//     document.write('Hello i am Victor!<br>')
//     plus = plus - 1
//     console.log(plus)
// }
// document.write("Life without ice cream isn't the same")


// function isPalindrome (x) {
//     return str == str.split('').reverse().join('');
// }
//
//
// isPalindrome(x)


// function wakeUpUser() {
//     // alert("Are you going to stare at this boring page forever?");
//     console.log("Are you going to stare at this boring page forever?")
// }
//
//
//
// setTimeout(wakeUpUser, 2000);


// const areaOrPerimeter = function(l , w) {
//    if (l === w) {
//        return l * w
//    } else if(l !== w){
//        return (l + w) * 2
//    }
//
//
// };
//
// console.log(areaOrPerimeter( 10, 5))

// function correct(string) {
//
//     return string
// }
//
// console.log(correct('S is misinterpreted as 5'))

//
// function correct(string) {
//     let index = string.indexOf('S')
//     // if (){
//     //
//     // }
//     return string[index]
// }
//
// console.log(correct('S is misinterpreted as 5'))

// function getFromSubstr( str, substr ){ // type string | undefined
//     let index = str.indexOf(substr);
//     console.log(str[index])
//     // if( index < 0 ) return;
//     // return str.substr(index);
//     return index
// }
//
// console.log( getFromSubstr( 'g0hbd7twn', '7' ) );

// function correct(string) {
//     // organize the corrections in a human-readable object/map
//     const corrections = {
//         "5": "S",
//         "0": "O",
//         "1": "I",
//     };
//
//     return (
//         string
//             // split the string into an array of characters
//             .split("")
//             // check if the current character is in the corrections object
//             // if it is, correct it, else return it unchanged
//             .map((char) =>
//                 corrections.hasOwnProperty(char) ? corrections[char] : char
//             )
//             // join the array of characters to a string
//             .join("")
//     );
// }
//
// console.log(correct("1 l0ve m1ss1ss1pp1!"));

//
// function correct(s){
//     s = s.split('');
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === '5') s[i] = 'S';
//         else if (s[i] === '0') s[i] = 'O';
//         else if (s[i] === '1') s[i] = 'I';
//     }
//     return s.join('');
// }


//
// class User {
//     _name = ""
//
//     constructor(name, site, dob) {
//         this._name = name
//         this.site = site
//         this.dateOfBirth = dob
//         this.counter = 0
//     }
//
//     get name() {
//         return this._name + '!!!'
//     }
//
//     set name(value) {
//         this._name = value
//     }
//
//     hello() {
//         // debugger
//         this.counter++
//         console.log(`i am ${this._name} from ${this.site}`)
//     }
// }
//
// const u1 = new User('Victor #227', 'it-inc', new Date(1996, 1, 2))
// const u2 = new User('Eva', 'it-inc', new Date(1988, 1, 2))
// u1.name = 'Igor'
// // console.log(u1.name)
// // let users = [u1, u2]
// // let test = users.forEach(u => u.hello())
//
// // console.log(test)
//
// class Coder extends User {
//     constructor(name, site, dob, tech) {
//         super(name, site, dob);
//         this.tech = tech
//     }
//
//     code() {
//         console.log(`I am ${this.name}, here is my  ${this.tech} code: function sum(a, b) => a + b`)
//     }
//
//
//     hello() {
//         super.hello();
//         // console.log(`Go away`)
//     }
// }
//
// const coder1 = new Coder('Vic #1', 'it-inc', new Date(1996, 1, 2), 'JS React')
// // coder1.hello()
//
//
// class Hacker extends Coder {
//     constructor(a, b, c, d) {
//         super();
//         this.tech = 'XXX'
//         this._name = 'XXX'
//     }
//
//     code() {
//         console.log(`I'll hack everything`)
//     }
//     hello() {
//         throw new Error(`Go away`)
//     }
// }
//
// const hacker = new Hacker('Vic #1', 'it-inc', new Date(1996, 1, 2), 'JS React')
// // hacker.hello()
// // hacker.code()
//
//
// let users = [u1, u2, coder1, hacker]
// users.forEach(u => u.hello())
//
//
// // console.log(coder1)
//
//
// // function commonHello() {
// //     console.log(`i am ${this.name} from ${this.site}`)
// // }
// //
// // const userFabric = (name) => {
// //     const user = {
// //         name: name,
// //         site: 'it-inc',
// //         dateOfBirth: new Date(1988, 1, 2),
// //         hello: commonHello
// //     }
// //     return user
// // }
// //
// // const user1 = userFabric('Victor')
// // const user2 = userFabric('Eva')
// // // console.log(user1)
// // // console.log(user2)
// //
// // user1.hello()
// // user2.hello()
//
//
// // class DeleteUserAction {
// //     constructor() {
// //         this.type = 'DELETE-USER'
// //         this.playload = {
// //             userID: userID
// //         }
// //     }
// // }
// //
// //
// // const action1 = new DeleteUserAction(666)
// // const action2 = new DeleteUserAction(777)
// // console.log(action1)
// // console.log(action2)
//
//
// // function DeleteUserAction(userID){
// //     this.type= 'DELETE-USER'
// //     this.playload = {
// //         userID: userID
// //     }
// // }
// //
// // const action1 = new DeleteUserAction(666)
// // const action2 = new DeleteUserAction(777)
// // console.log(action1)
// // console.log(action2)
//
//
// //
// //
// // function powersOfTwo(n) {
// //     var myArray = [];
// //     for (var i = 0; i <= n; i++) {
// //         myArray.push(2 ** i);
// //     }
// //     return myArray
// // }
// //
// // const result = powersOfTwo(4)
// // console.log(result)
//
// //
// // function getNumber() {
// //     const promise = new Promise((resolve, reject) => {
// //
// //         // reject('some error')
// //         setTimeout(() => {
// //             resolve(Math.random())
// //         }, 2000)
// //
// //     })
// //     return promise
// // }
// //
// // // getNumber().then(n => console.log(n))
// //
// // // getNumber().then(n => console.log(n))
// //
// //
// // setTimeout(() => {
// //     console.log('Hello')
// // }, 3000)
// //
// //
// // const repo = {
// //     save(data) {
// //         try {
// //             localStorage.setItem('some-key', JSON.stringify(data))
// //         } catch (error) {
// //             return false
// //         }
// //         return true
// //     }, saveAsync(data) {
// //         const promise = new Promise((resolve, rejected) => {
// //             try {
// //                 localStorage.setItem('some-key', JSON.stringify(data))
// //                 resolve()
// //             } catch (error) {
// //                 rejected(error)
// //             }
// //         })
// //         return promise
// //     }, read() {
// //         const data = localStorage.getItem('some-key')
// //         if (!data) {
// //             return (null)
// //         } else {
// //             return (JSON.parse(data))
// //         }
// //     }, readAsync() {
// //         return new Promise((res, rej) => {
// //             const data = localStorage.getItem('some-key')
// //             if (!data) {
// //                 res(null)
// //             } else {
// //                 res(JSON.parse(data))
// //             }
// //         })
// //     }
// // }
// //
// //
// // // const result = repo.save({name: 'Victor Svetailo  '})
// // // if (result) {
// // //     console.log('SAVE')
// // // } else {
// // //     console.error('NOT SAVE')
// // // }
// //
// // // repo.saveAsync({name: 'Victor Svetailo'})
// // //     .then(() => {console.log('SAVE')})
// // //     .catch(error => console.warn('NOT SAVE' + error))
// //
// //
// // // const run = async () => {
// // //     await repo.saveAsync({name: 'Victor Svetailo'})
// // //     console.log('SAVE')
// // //     const data = await repo.readAsync()
// // //     console.log(data)
// // // }
// // //
// // // run()
// //
// //
// // // let count = 0
// // //
// // // setInterval(()=>{
// // //     count += 1
// // //     console.log(count)
// // // }, 1000)
// //
// //
// // function wait(ms) {
// //     return new Promise((res) => {
// //         setTimeout(() => {
// //             res()
// //         }, ms)
// //     })
// // }
// //
// // async function run() {
// //         await wait(100)
// //         console.log(1)
// //         await wait(100)
// //         console.log(2)
// //         await wait(100)
// //         console.log(3)
// // }
// //
// // run()
// //
// // // const resolvedPromise = Promise.resolve([{}])
// // // //console.log(resolvedPromise)
// // //
// // // resolvedPromise
// // //     .then(data => console.log(data))
// // //     .catch(error => console.warn(error))
// // //console.log('test')
// //
// // // const rejectPromise = Promise.reject(100)
// // // //console.log(rejectPromise)
// // //
// // // rejectPromise
// // //     .then(data => console.log(data))
// // //     .catch(error => console.warn(error))
// //
// //
// // // const promise1 = axios.get('https://google.com')
// // // promise1.then((data) => {
// // //     console.log(data)
// // // })
// //
// //
// // // const obj = {
// // //     name: '',
// // //     say(message) {
// // //         alert(message + ', ' + `${this.name}` )
// // //     }
// // // }
// // //
// // // obj.name = 'Victor'
// // // obj.say('Hello')
// //
// //
// // // function getSum(number) {
// // //     //...здесь пишем код.
// // //     let figures = "" + number
// // //     let sum = 0
// // //     for (let i = 0; i < figures.length; i++)
// // //         sum += +figures[i]
// // //
// // //         return sum
// // //
// // // }
// // //
// // //
// // // console.log(getSum(242424))
// //
// //
// // // 2. Функция getTriangleType принимает три параметра:
// // // длины сторон треугольника.
// // // Функция должна возвращать:
// // //  - "10", если треугольник равносторонний,
// // //  - "01", если треугольник равнобедренный,
// // //  - "11", если треугольник обычный,
// // //  - "00", если такого треугольника не существует.
// //
// //
// // // function getTriangleType(a, b, c) {
// // //     //...здесь пишем код.
// // //
// // //     if (a === 0 || b === 0 || c === 0) {
// // //         return '00' //"треугольника не существует"
// // //     }
// // //     if (a === b && a === c && c === b) {
// // //         return '10' //"равносторонний"
// // //     }
// // //     if (a === b && a === c && c !== b) {
// // //         return '01' //"треугольник равнобедренный"
// // //     }
// // //     if (a !== b && a !== c && c === b) {
// // //         return '01' //"треугольник равнобедренный"
// // //     }
// // //     if (a === b && a !== c && c === b) {
// // //         return '01' //"треугольник равнобедренный"
// // //     }
// // //     if (a === b && a !== c && c !== b) {
// // //         return '01'// "треугольник равнобедренный"
// // //     }
// // //     if (a !== b && a === c && c !== b) {
// // //         return '01' //"треугольник равнобедренный"
// // //     }
// // //     if (a !== b && a !== c && c !== b) {
// // //         return "11" // "треугольник обычный"
// // //     }
// // // }
// // //
// // // console.log(getTriangleType(123, 123, 0))
// //
// //
// // // 1. Функция sum принимает параметром целые положительные
// // // числа (неопределённое кол-во) и возвращает их сумму (rest).
// //
// // // const array = [3, 5, 7, 6, 4, 9]
// // //
// // // function sum(...nums) {
// // //     //console.log(nums)
// // //     return nums.reduce((a, b) => a + b);
// // //
// // // }
// // //
// // // console.log(sum(array))
// //
// //
// // // const pow = (x, n) => {
// // //     let result = 1
// // //
// // //     for(let i = 0; i < n; i++){
// // //         result *= x;
// // //     }
// // //     return result
// // // }
// // // debugger
// // // const pow = (x, n) => {
// // //     if (n === 1) {
// // //         return x;
// // //     } else {
// // //         debugger
// // //         return x * pow(x, n - 1)
// // //         debugger
// // //     }
// // // }
// // //
// // //
// // // // pow(2, 3)
// // //
// // // console.log(pow(2, 2))
// //
// //
// // //
// // //
// // //
// // // console.log(document.head)
// // // console.log(document.documentElement)
// // // console.log(document.body.firstChild)
// // // console.log(document.body.lastChild)
// // // console.log(document.querySelector('#current').parentNode.parentNode)
// // // console.log(document.querySelector(`[data-current='3']`));
// // // console.log(document.querySelector(`[data-current='3']`).nextElementSibling);
// // // console.log(document.querySelector('#current').parentElement)
// //
// //
// // // console.log(document.body.childNodes)
// //
// // // for (let node of document.body.childNodes){
// // //     if (node.nodeName == '#text'){
// // //         continue;
// // //     }
// // //     console.log(node)
// // // }
// //
// //
// // // // const btns = document.querySelectorAll('button');
// // //
// // // // btn.onclick = function () {
// // // //     alert('Это был Click')
// // // // }
// // // //
// // // // btn.onclick = function () {
// // // //     alert('Что то еще!')
// // // // }
// // //
// // // // btn.addEventListener('click', ()=> {
// // // //     alert('Hello i do React')
// // // // })
// // //
// // //
// // // // const overlay = document.querySelector('.overlay')
// // //
// // // // let i = 0
// // // // const deleteElement = (e) => {
// // // //     // e.target.remove()
// // // //     console.log(e.currentTarget)
// // // //     console.log(e.type)
// // //     // i++
// // //     // if(i == 1){
// // //     //     btn.removeEventListener('click', deleteElement)
// // //     // }
// // // }
// // // // btn.addEventListener('click', deleteElement)
// // // // overlay.addEventListener('click', deleteElement)
// // //
// // //
// // // //
// // // // btns.forEach(btn => {
// // // //     btn.addEventListener('click', deleteElement, {once: true})
// // // // })
// // // //
// // // //
// // // // const link = document.querySelector('a');
// // // // link.addEventListener('click', function(event) {
// // // //     event.preventDefault()
// // // //     console.log(event.target)
// // // // })