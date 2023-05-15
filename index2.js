//Задание 1

class Plant {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }
    grow() {
        this.height += 10;
    }

    getHeight() {
        return this.height;
    }

    getAge() {
        return this.age;
    }

    setHeight(height) {
        this.height = height;
    }
    setAge(age) {
        this.age = age;
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age);
        this.numberOfFlowers = numberOfFlowers;
    }
}

const rosePlant = new Rose(57, 12, 5);
let age = rosePlant.getAge();
console.log(age);
let heigt = rosePlant.getHeight();
console.log(heigt);
rosePlant.setAge(24);
rosePlant.setHeight(34);
age = rosePlant.getAge();
console.log(age);
heigt = rosePlant.getHeight();
console.log(heigt);
// Задание 2
//Создайте объект garden с несколькими свойствами, например (orange, apple, pear и др.).
const garden = {
    orange: true,
    apple: false,
    pear: true,

}
//При помощи синтаксиса for (key in object) {} измените название ключей, сделав все их буквы заглавными

for (const key in garden) {

    console.log(key.toLocaleUpperCase());

}

//При помощи синтаксиса for (key in object) {} выведите значения всех ключей
for (const key in garden) {

    // const element = parent[key];
    console.log(garden[key]);
}

//Используйте синтаксис for (key in object) {} и добавьте проверку на наличие ключа "apple". 
//Если такой ключ существует, то выведите в консоль значение ключа "pear",
//присвоив ему новое значение "delicious"


for (const key in garden) {

    if (key == "pear") {
        garden[key] = "delicious";
       console.log(garden[key]);
    }
}


//Задание 3
//Создайте строку classmates. Перечислите в ней имена нескольких студентов.
//Разбейте строку, используя метод split, положите значение в константу classmatesArr
//Затем соедините массив, используя метод join, положите значение в константу newClassmates

let classmates = "Yana, Peter, Misha, Anna, Svetlana";
let classmatesArr = classmates.split(", ");
let  newClassmates = classmatesArr.join(";");


//Задание 4
//Cоздайте массив currency, положите в него 6 разных значений.
//Создайте переменную newCurrency.
//Используя метод splice, удалите из массива 3 элемента, начиная со второго,
//и вместо удаленных элементов вставьте 1 элемент со значением "I will earn big money by programming".
//Все это положите в переменную newCurrency.
//Выведите в сонсоль currency и newCurrency, посмотрите, мутировал ли исходныц массив.

let currency = ["USD", "EUR", "UAH", "REG", "AUD", "KSD"];
let newCurrency= currency.splice(1,3,"I will earn big money by programming");
console.log(currency);
console.log(newCurrency);