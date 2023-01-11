const obj = {
    name: 'Victor',
    lastName: 'Svetailo',
    age: 26,
    skills: {
        front: 'React, JS',
        back: 'NodeJS, Express'
    }
}

// const copyObj = JSON.stringify(obj)
// console.log(copyObj)
// const notJson = JSON.parse(copyObj)
// console.log(notJson)
//
// console.log(obj.skills === obj.skills)

const cloneObj = JSON.parse(JSON.stringify(obj))
console.log(cloneObj)

obj.skills.back = 'Test'
console.log(obj)
