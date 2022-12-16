'use strict'

// const p = document.querySelectorAll('p')
// console.log(p)


// const box = document.getElementById('box'),
//     btn = document.getElementsByTagName("button"),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('div'),
//     wrapper = document.querySelector('.wrapper');
//
// box.textContent = 'Hello'
// // box.innerHTML = 'Hello'
// // box.innerText = 'Hello'
// // box.outerText = 'Hello'
// box.style.color = 'white'
// box.style.padding = '10px'
// box.style.textAlign = 'center'
// box.background = 'blue'
// box.style.width = '50px'
// box.style.height = '50px'
// box.style.borderRadius = '20%'
//
// // console.dir(btn[1])
// btn[1].style.borderRadius = '50%'
//
// const brBox = '30%'
// box.style.cssText = `background-color: hotpink; border-radius: ${brBox}`
//
// for (let i = 0; i < hearts.length; i++){
//     // console.log(i)
//     hearts[i].style.borderRadius = '20px'
// }
//
// hearts.forEach((item) => {
//     item.style.background = 'green'
// })
//
//
// const div = document.createElement('div')
// const text = document.createTextNode('I\'m Victor')
//
// div.classList.add('black');
// // document.body.append(div);
// // wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div)
// hearts[0].after(div)
// circles[0].remove()

// hearts[0].replaceWith(circles[0])

// устаревшие команды
// wrapper.appendChild(div)
// wrapper.insertBefore(div, hearts[2])
// wrapper.removeChild(hearts[2])
// wrapper.replaceChild(circles[0], hearts[2])

// div.innerHTML = '<h4>Hello World!<h4/>'
// div.textContent = 'Victor!'

// div.insertAdjacentHTML('beforeend', '<h1>Test #227</h1>');


// const box = document.getElementById('box');
// console.log(box)
// получаем псевдо массив  у него нет методов как у обычного массива  // HTML коллекция
// const btn = document.getElementsByTagName("button");
// console.log(btn)
// получить один элемент
// const btn = document.getElementsByTagName("button");
// console.log(btn[1])

// находим элементы по классу это тоже HTML коллекция
// const circles = document.getElementsByClassName('circle')
// console.log(circles)

// этот метод устроен так что внутрь мы помещаем css силектор
// querySelectorAll есть метод forEach()
// const hearts = document.querySelectorAll('.heart')
// hearts.forEach((item)=>{
//     console.log(item)
// })
// console.log(hearts)

// достает одн элемент и именно первый элемент со страницы
// const oneHeart = document.querySelector('div')
// console.log(oneHeart)

