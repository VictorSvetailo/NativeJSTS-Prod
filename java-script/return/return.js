const usdCurr = 5
const discount = 5


function convert(amount, curr) {
    return amount * curr
}

function promotion(result) {
    console.log(result * discount)
}

const resConvert = convert(500, usdCurr)

promotion(resConvert)


function test() {
    for (let i = 0; i < 5; i++){
        console.log(i)
        if (i === 3) return
    }
    console.log('Result')
}

function doNothing() {}
console.log(doNothing() === undefined)