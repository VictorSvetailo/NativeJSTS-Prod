// 'use strict';

// const num = new Function(3)
// console.log(num)

// function User(name, id, lastName) {
//     this.name = name;
//     this.id = id
//     this.human = true
//     this.lastName = lastName
//     this.hello = ()=>{
//         alert(`Hello ${this.name}`)
//     }
// }
//
// const ivan =  new User('Ivan', 28, 'Petr')
// const victor =  new User('Victor', 26, 'Svetailo')
// ivan.hello()
// victor.hello()
// console.log(ivan)
// console.log(victor)
//
// User.prototype.exit = function (){
//     alert(`Exit ${this.name} ушел`)
// }
// ivan.exit()
// victor.exit()

// function showThis(a, b) {
//     console.log(this)
//     function sum() {
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }
// showThis(4, 5)

// const obj = {
//     id: 1,
//     name: 'Victor',
//     lastName: 'Svetailo',
//     sum: function() {
//         function shout() {
//             console.log(this)
//         }
//         shout()
//     }
// }
//
// obj.sum()


// function User(name, id) {
//     this.name = name;
//     this.id = id
//     this.human = true
//     // this.lastName = lastName
//     // this.hello = ()=>{
//     //     alert(`Hello ${this.name}`)
//     // }
// }


// function sayName(lastname) {
//     console.log(this)
//     console.log(this.name + lastname)
// }
//
// const user = {
//     name: 'John'
// }
//
// sayName.call(user, ' Svetailo')
// sayName.apply(user, [' Svetailo'])
//
//
// function count(num) {
//     return this*num
// }
// const double = count.bind(2)
// console.log(double(3))
// console.log(double(13))




// 1) обычная функция this = window, но если use strict - undefined
// 2) контекст у методов объекта это будет сам объект
// 3) this в конструкторах и классах это новый экземпляр объекта


// Class


class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    calcArea(){
        return this.height * this.width
    }
}


class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text
        this.bgColor = bgColor
    }
    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor},`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red')


div.showMyProps()
console.log(div.calcArea())

// const square = new Rectangle(10, 20)
// const square2 = new Rectangle(100, 15)
//
// console.log(square.calcArea())
// console.log(square2.calcArea())