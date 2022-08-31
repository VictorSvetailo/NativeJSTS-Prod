'use strict'






// const pow = (x, n) => {
//     let result = 1
//
//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result
// }
// debugger
// const pow = (x, n) => {
//     if (n === 1) {
//         return x;
//     } else {
//         debugger
//         return x * pow(x, n - 1)
//         debugger
//     }
// }
//
//
// // pow(2, 3)
//
// console.log(pow(2, 2))


//
//
//
// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector(`[data-current='3']`));
// console.log(document.querySelector(`[data-current='3']`).nextElementSibling);
// console.log(document.querySelector('#current').parentElement)


// console.log(document.body.childNodes)

// for (let node of document.body.childNodes){
//     if (node.nodeName == '#text'){
//         continue;
//     }
//     console.log(node)
// }


// // const btns = document.querySelectorAll('button');
//
// // btn.onclick = function () {
// //     alert('Это был Click')
// // }
// //
// // btn.onclick = function () {
// //     alert('Что то еще!')
// // }
//
// // btn.addEventListener('click', ()=> {
// //     alert('Hello i do React')
// // })
//
//
// // const overlay = document.querySelector('.overlay')
//
// // let i = 0
// // const deleteElement = (e) => {
// //     // e.target.remove()
// //     console.log(e.currentTarget)
// //     console.log(e.type)
//     // i++
//     // if(i == 1){
//     //     btn.removeEventListener('click', deleteElement)
//     // }
// }
// // btn.addEventListener('click', deleteElement)
// // overlay.addEventListener('click', deleteElement)
//
//
// //
// // btns.forEach(btn => {
// //     btn.addEventListener('click', deleteElement, {once: true})
// // })
// //
// //
// // const link = document.querySelector('a');
// // link.addEventListener('click', function(event) {
// //     event.preventDefault()
// //     console.log(event.target)
// // })