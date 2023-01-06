
function* giveMeMoney() {
    yield 500
    yield 400
    yield 300
    yield 200
    return 100
}

const generator = giveMeMoney()


console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)