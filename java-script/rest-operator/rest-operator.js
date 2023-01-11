

const log = function (a, b, ...rest) {
    console.log(a, b, rest)
}

log('basoc', 'rest', 'operator', 'victor', 49242)

function calcOrDouble(number, basis = 5) {
    console.log(number * basis)
}

calcOrDouble(3, 10)