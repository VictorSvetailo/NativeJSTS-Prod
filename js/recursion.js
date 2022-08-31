'use state'


const users = {
    ivanov: {
        age: 25,
        parent: {
            ignatenko1: {
                age: 27,
            },
            ivanov2: {
                age: 25,
            },
            koka3: {
                age: 23,
                parent: {
                    age: 77,
                    lola4: {
                        petrov: {},
                    },
                    go: {
                        age: 77,
                        hiro: {},
                        garbuz: {
                            age: 77,
                            parent: {
                                petrov: {},
                            }
                        }
                    }
                }
            }

        },
    },
    kostenko: {
        age: 99,
        parent: {
            karpov: {},
            sniezko: {
                age: 1,
                parent: {
                    petrov: {},
                }
            }
        }
    }
}


function userParentRecursion(obj) {
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            console.log(key)
            userParentRecursion(obj.parent[key])
        }
    }
}

for (let key in users) {
    userParentRecursion(users[key])
}


////

// let t = 0

// const recursion = () => {
//     t++;
//     console.log(t);
//     if (t === 100) {
//         return
//     }
//     recursion()
// }
//
// recursion()

// const recursion = () => {
//     let out = ''
//     for (let i = 1; i <= 100; i++) {
//         out += i + ' ';
//     }
//     console.log(out);
// }
//
// recursion()


///recursion

// let i = 0;
// let out = '';
//
// function f3() {
//     i++
//     out += i + ' ';
//     if (i >= 30) {
//         return
//     }
//     f3()
// }

//f3()
//console.log(out)

//

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
//
// }

//let s1 = 0
//let s = 300
// function moneyRecursion() {
//     let m = randomInteger(0, 100);
//     console.log('add: ' + m);
//     s1 += m
//     console.log('sum: ' + s1);
//     if (s1 > 300) return
//     moneyRecursion()
// }

//moneyRecursion()

// function moneyRepeat() {
//     let s1 = 0
//     while (true) {
//         let m = randomInteger(0, 100);
//         console.log('add: ' + m);
//         s1 += m
//         console.log('sum: ' + s1);
//         if (s1 >= 300) return
//     }
// }
// moneyRepeat()