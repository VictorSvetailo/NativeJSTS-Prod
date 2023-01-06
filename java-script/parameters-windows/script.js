'use strict';
const btn = document.querySelector('button')
const box = document.querySelector('.box')

// const width = box.clientWidth
// const height = box.clientHeight

// const width = box.offsetWidth
// const height = box.offsetHeight

const width = box.scrollWidth
const height = box.scrollHeight




btn.addEventListener('click', ()=> {
    // box.style.height = box.scrollHeight + 'px'
    //
    console.log(box.scrollTop)
})


// console.log(box.getBoundingClientRect().width)


const style = window.getComputedStyle(box);

console.log(style.display)

