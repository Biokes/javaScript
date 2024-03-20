class Person {
     age;
     value;
    constructor(value, age) {
        this.value = "name"
        this.age = 12
    }
    function() {
        return "this is an instance method with \nage : " + this.age + "\n value : "+ this.value;
    }
};
let instance = new Person("given", 10);
console.log(instance.function())