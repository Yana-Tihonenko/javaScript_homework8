// Task 1
// Create classes: Plant, Rose. The Rose class should inherit from Plant.
// Let the plant have fields: height, age.
// Create a method named grow that increases its height by 10 cm.
// The Rose class should have a field called numberOfFlowers.
// Create an object of the Rose class and call the grow method.


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
