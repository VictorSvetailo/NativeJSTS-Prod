const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];


//1. Создайте поверхностную копию объекта userObj

const userObj = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"],
}

// variant #1
// let copyUser;
// function copy(user) {
//     copyUser = {};
//     let key;
//     for (key in user) {
//         copyUser[key] = user[key];
//     }
//     return copyUser;
// }
// copy(userObj)
//
// // test
// copyUser.name = 'Victor'
// copyUser.friends[0] = '007'
// console.log(userObj)
// console.log(copyUser)
//
//variant #2
//let copyUser2 = Object.assign({}, userObj)
// // test
// copyUser2.name = 'Victor'
// copyUser2.friends[0] = '007'
// console.log(copyUser2)
// console.log(userObj)



//Проверка:
// console.log(user===copyUser)- что должно быть в консоли? false
// console.log(user.friends===copyUser.friends)- что должно быть в консоли? true

//2. Полная (глубокая) копия объекта user
let deepCopyUser;


// for (let key in userObj) {
//     if (userObj[key] === 'object') {
//         for (let i in userObj[key]) {
//             console.log(`Свойства ${i} имеет значение --- ${userObj[key][i]}`)
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение  ${userObj[key]}`)
//     }
// }
//
// deepCopyUser.friends[1] = '7777777'
//
// console.log(userObj);
// console.log(deepCopyUser);


//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents;

//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents;

//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

// //5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName;
// console.log(sortedByName);
//
// //5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
// let sortedByScores;
// console.log(sortedByScores);
//
// //6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let  bestStudents;
// console.log(bestStudents)
//
// //6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//
// let topStudents;
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents;
// console.log(newDeepCopyStudents)
//
//
// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents;
// console.log(notMarriedStudents)
//
// //8. Сформируйте массив имён студентов (map)
// let studentsNames;
// console.log(studentsNames)
//
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом (join)
// // - запятой (join)
// let namesWithSpace;
// console.log(namesWithSpace)
// let namesWithComma;
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents;
// console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
// let studentsWithMarriedNick;
// console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
// let ann;
// console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
// let bestStudent;
// console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

// let scoresSum;
// console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   //..............................
}
// console.log(addFriends(students));









