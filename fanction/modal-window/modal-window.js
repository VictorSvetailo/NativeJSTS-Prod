// const btn = document.querySelector('.btn')
// let timerId, i = 0




// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('hello')
//         console.log('Test!')
//     }
//
// }
//
// const sayHello = outer()
//
// console.log(sayHello)


// const someRes = getData()
// const node = document.querySelector('.class')


// setInterval(function (){
//     if (node){
//         node.innerHTML = someRes
//     }
// }, 1000)


// const myAnimation = () => {
//     btn.disabled = true
//     const elem = document.querySelector('.box')
//     let pos = 0
//
//     const id = setInterval(frame, 10)
//
//     function frame() {
//         if (pos === 300) {
//             clearInterval(id)
//             btn.disabled = false
//         } else {
//             pos++
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
//
//
// btn.addEventListener('click', myAnimation)
//
//
// function logger () {
//     if (i === 3){
//         clearInterval(timerId)
//     }
//     console.log('text V')
//     i++
// }

// let id = setTimeout(function log(){
//     console.log('Test 1')
//     id = setTimeout(log, 2000)
// }, 500)

