// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// оталкнуться от элементов HTML

// console.log(document.querySelector('.wrapper').parentNode.parentNode)

// получить атрибут со страницы
// console.log(document.querySelector('[data-current="my attribute"]'))
// console.log(document.querySelector('[data-current="my attribute"]').nextElementSibling)


// перебрать всех childNodes которые лежат в body и избавиться от всех текстовых node

// for (let node of document.body.childNodes){
//     if (node.nodeName !== '#text'){
//         console.log(node)
//     }
// }
//
// for (let node of document.body.childNodes){
//     if (node.nodeName === '#text'){
//         continue
//     }
//     console.log(node)
// }