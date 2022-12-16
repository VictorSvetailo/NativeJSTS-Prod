window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box_touch')
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault()
        // console.log('touchstart')
    })
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault()
        // console.log('touch move')
    })
    box.addEventListener('touchend', (e)=>{
        e.preventDefault()
        // console.log('touch end')
    })
    box.addEventListener('touchenter', (e)=>{
        e.preventDefault()
        // console.log('touch enter')
    })
    box.addEventListener('touchleave', (e)=>{
        e.preventDefault()
        // console.log('touch leave')
    })
    box.addEventListener('touchcansel', (e)=>{
        e.preventDefault()
        // console.log('touch cansel')
    })
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault()
        // console.log('touch cansel')
        // console.log(e.targetTouches)
    })
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault()
        // console.log('touch cansel')
        // console.log(e.targetTouches[0].pageX)
    })
})