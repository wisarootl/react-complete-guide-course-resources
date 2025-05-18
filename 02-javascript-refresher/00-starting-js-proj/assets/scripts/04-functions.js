console.log("== functions ==");

function createGreeting(username, message = "Hello!"){
    //   console.log("Hello World! from a function!");
    //   console.log(username);
    //   console.log(message);
    return "Hi, I am " + username + ". " + message;
}

console.log(createGreeting("Max", "Hello"));
console.log(createGreeting("Manuel", "What's up?"));