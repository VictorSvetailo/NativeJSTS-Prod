const btnEvent = document.querySelectorAll('.btn_event')
// const btnEvent = document.querySelector('.btn_event')
console.log(btnEvent)


// получить данные о элементе, установить и удалить обработчик


// btnEvent.addEventListener('mouseenter', (e)=>{
//     console.log(e.target)
//     e.target.style.background = '#000'
// })



btnEvent.forEach((item)=> {
    item.addEventListener('click', (e)=>{console.log(e.target)}, {once: true})
})



// let i = 0
// const deleteBtnEvent = (e) => {
//     console.log(e.target)
//     // e.target.remove()
//     i++
//     setTimeout(()=> {
//         i === 1 ? btnEvent.removeEventListener('click', deleteBtnEvent) : null
//         console.log(i)
//     },2000)
// }






// btnEvent.onclick = function() {
//     console.log('click')
// }
// btnEvent.onclick = function() {
//     console.log('second click')
// }


// btnEvent.addEventListener('click', ()=>{
//     console.log('click addEventListener')
// })
//
// btnEvent.addEventListener('click', ()=>{
//     setTimeout(()=>{
//         console.log('click addEventListener 2')
//     }, 2000)
// })
//
// btnEvent.addEventListener('mouseenter', ()=>{
//     console.log('hover - mouseenter')
// })

// получить данные о элементе, установить и удалить обработчик

// let i = 0
// const deleteBtnEvent = (e) => {
//     console.log(e.target)
//     // e.target.remove()
//     i++
//     setTimeout(()=> {
//         i === 1 ? btnEvent.removeEventListener('click', deleteBtnEvent) : null
//         console.log(i)
//     },2000)
// }

// btnEvent.addEventListener('mouseenter', (e)=>{
//     console.log(e.target)
//     e.target.style.background = '#000'
// })

// btnEvent.addEventListener('click', deleteBtnEvent)
// btnEvent.removeEventListener('click', deleteBtnEvent)



// Отменить действие по умолчанию

// const link = document.querySelector('a')
//
// link.addEventListener('click', function (e){
//     e.preventDefault()
//
//     console.log(e.target)
// })