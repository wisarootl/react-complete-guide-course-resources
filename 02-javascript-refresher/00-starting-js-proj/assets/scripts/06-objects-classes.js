console.log("== objects & classes ==");

const user = {
    name: "John",
    age: 30,
    email: "",
    greet() {
        console.log("Hello, " + this.name);
    }
}

console.log(user);
console.log(user.name);
user.greet();

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

const user2 = new User("Jane", 25, "")
console.log(user2);
user2.greet();