// let user = {
//     'name': 'Victor', 'age': 25, 'address': {
//         'city': {
//             'title': 'Moscow'
//         }
//     }
// }

let users1 = {
    'name': 'Victor', 'age': 25, 'address как': 'city', 'title': 'Moscow',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}


let users2: UsersType = {
    '101': {
        id: 101, name: 'Dima',
    }, '32232': {
        id: 32232, name: 'Natasha',
    }, '1212': {
        id: 1212, name: 'Victor',
    }, '1': {
        id: 1, name: 'Kate',
    },

}

let user = {id: 666, name: 'Masha'}

const users2Array = [{
    id: 101, name: 'Dima'},
    {id: 32232, name: 'Natasha'},
    {id: 1212, name: 'Victor'},
    {id: 1, name: 'Kate'},
]


// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be


// Как делать?
// Для чего нужно -
// Советы -

// 1. Simple object
let man = {
    name: 'John', age: 28
};

let manFullCopy = {...man}
manFullCopy.name = 'Kate'


// 2. array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]


// 3. Object inside an object
let man1 = {
    name: 'John', age: 28, mother: {
        name: 'Kate', age: 50
    }
};

let man1FullCopy = {
    ...man1, mother: {
        ...man1.mother
    }
}


// 4. array of primitives inside an object
let man2 = {
    name: 'John', age: 28, friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {
    ...man2, friends: [...man2.friends]
}


// 5 array of objects
let people = [{name: "Peter", age: 30}, {name: "Steven", age: 32}, {name: "William", age: 28}];

let peopleFullCopy = people.map(el => ({...el}))


// 6 array of objects inside object
let man3 = {
    name: 'John', age: 28, friends: [{name: "Kate", age: 30}, {name: "Steven", age: 32}, {name: "William", age: 28}]
};

let man3FullCopy = {
    ...man3, friends: man3.friends.map(el => ({...el}))
}


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John', age: 28, mother: {
        name: "Kate", age: 50, work: {
            position: "doctor", experience: 15
        }
    }
};

let man4FullCopy = {
    ...man4, mother: {
        ...man4.mother, work: {...man4.mother.work},
    },

}

// 8 array of objects inside object -> object
let man5 = {
    name: 'John', age: 28, mother: {
        name: "Kate", age: 50, work: {
            position: "doctor", experience: 15
        }, parents: [{name: "Kevin", age: 80}, {name: "Jennifer", age: 78},]
    }
};

let man5FullCopy = {
    ...man5, mother: {
        ...man5.mother, work: {
            ...man5.mother.work
        }, parents: man5.mother.parents.map(el => ({el}))
    }
}


// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John', age: 28, mother: {
        name: "Kate", age: 50, work: {
            position: "doctor", experience: 15
        }, parents: [{
            name: "Kevin", age: 80, favoriteDish: {
                title: "borscht"
            }
        }, {
            name: "Jennifer", age: 78, favoriteDish: {
                title: "sushi"
            }
        },]
    }
};

let man6FullCopy = {
    ...man6, mother: {
        ...man6.mother, work: {...man6.mother.work}, parents: man6.mother.parents.map(el => {
            return {
                ...el, favoriteDish: {...el.favoriteDish}
            }
        })

    }
}
man6.mother.parents[0].favoriteDish.title = 'Kate'
// console.log(man6.mother.parents[0].favoriteDish)
// console.log(man6FullCopy.mother.parents[0].favoriteDish)


//10 array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John', age: 28, mother: {
        name: "Kate", age: 50, work: {
            position: "doctor", experience: 15
        }, parents: [{
            name: "Kevin", age: 80, favoriteDish: {
                title: "borscht",
                ingredients: [{title: "beet", amount: 3}, {title: "potatoes", amount: 5}, {title: "carrot", amount: 1},]
            }
        }, {
            name: "Jennifer", age: 78, favoriteDish: {
                title: "sushi", ingredients: [{title: "fish", amount: 1}, {title: "rise", amount: 0.5}]
            }
        },]
    }
};

let man7FullCopy = {
    ...man7, mother: {
        ...man7.mother, work: {
            ...man7.mother.work,
        }, parents: man7.mother.parents.map(el => {
            return {
                ...el, favoriteDish: {
                    ...el.favoriteDish, ingredients: el.favoriteDish.ingredients.map(el => {
                        return {
                            ...el,
                        }
                    })
                }
            }
        })
    }
}

man7.mother.parents[0].favoriteDish.ingredients[0].title = 'Victor'
//
// console.log(man7.mother.parents[0].favoriteDish.ingredients[0].title)
// console.log(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title)
