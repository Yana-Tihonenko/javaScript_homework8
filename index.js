


// // const user = {
// //     name: "Jonh",
// //     age: 12,
// //     isMale: true
// // };

// // // console.log(user.name);

// // // const user3 = {
// // //     name: "Jonh3",
// // //     age: 39,
// // //     "has dog": true,

// // // };

// // // console.log(user3["has dog"]);


// // // let age = 15;
// // // let name = "ffff";
// // // let isMale = true;
// // // const user5 = { name, age, isMale }

// // // console.log(user5);

// // // const user6 = {
// // //     name: "RRRR",
// // //     age: 47,
// // //  hello () {
// // //         console.log("Hello");
// // //     }

// // // }
// // // user6.hello();


// // // const bike ={
// // //     brand: "lunux",
// // //     price: 194,
// // //     drive(){
// // //         console.log("YHY");
// // //     }

// // // }

// // // const mountainBile={
// // //     __proto__: bike,
// // //     count_speeds:7,


// // // }

// // // console.log(mountainBile);
// // // mountainBile.drive();

// // const brand = "BMW";

// // const car = {
// //     brand,
// //     price: 1000,
// //     doors: 3,
// //     drive() {
// //         console.log("Едем пассажир" + user.name);
// //     }
// // }


// // const ferrari = {
// //     __proto__: car,
// //     color: yellow,
// // }

// // Создайте класс Алкоголь с полями:
// // - название
// // - крепость
// // - объем
// // - метод drink - который в консоль "Приятно выпить <имя напитка>";

// // Создать дочерний класс коньяк c полями:
// // - годы выдержки
// // - страна происхождения. 

// // Создайте еще класс Мартини с полями:
// // - isBlack - это поле булеан

// // создайте экземпляры данных классов - коньяк и мартини

// class Alcohol {
//     constructor(title, strength, volume) {
//         this.title = title;
//         this.strength = title;
//         this.volume = title;
//     }
//     drink() {
//         return "Приятно выпить" + this.title;
//     }
// }

// class Cognac extends Alcohol {
//     constructor(title, strength, volume, year, country) {
//         super(title, strength, volume);
//         this.year = year;
//         this.country = country;
//     }
// }


// class Martini extends Alcohol {
//     constructor(title, strength, volume, isBlack) {
//         super(title, strength, volume);
//         this.isBlack = isBlack;
//     }
// }

// const cognac1 = new Cognac("1+1",35,1,2012,"Ukraine");
// const martini1 = new Martini("Розовое", 15, 1.5, false);

// console.log(cognac1);
// console.log(martini1);
// // class Parrot extends Animal {
// //     constructor(age, breed, title, feathersColor) {
// //       super(age, breed, title);
// //       this.feathersColor = feathersColor;
// //     }
// //   }

// Задание 1
// Создайте классы:Plant, Rose. Роза должна наследовать Растение. 
// Пусть у растения будут поля: рост, возраст. 
// И метод grow, который увеличивает его рост на 10 см. 
// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.

class Plant {
    constructor (height, age){
        this.height= height;
        this.age= age;
    }
    grow(){
        this.height +=10;
    }
}

class Rose extends Plant{
constructor(height, age, numberOfFlowers){
    super(height, age);
    this.numberOfFlowers = numberOfFlowers;
}
}

const rosePlant = new Rose(57,12, 5);
console.log(rosePlant);
rosePlant.grow();
console.log(rosePlant);