
// // let number = 5; debugger
//
// function logNumber() {
//     // let number = 4; debugger
//     // console.log(number); debugger
// }
// number = 7
//
//
// logNumber();debugger
//
// number = 5
//
// logNumber();debugger
//
// number = 10




function createCounter (){
    let counter = 0;debugger
    const myFunction = function() {
        counter = counter + 1 ;debugger
        return counter
    }
    console.log(counter)
    console.log(myFunction)
    return myFunction ;debugger

}

const increment = createCounter();debugger

const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);debugger



