console.log("== functions as values  ==");

function handleTimeout() {
    console.log("Timeout");
}

function handleTimeout2() {
    console.log("Timeout ... again!");
}

// setTimeout(() => {});

setTimeout(handleTimeout, 2);
setTimeout(handleTimeout2, 3);
setTimeout(() => {
    console.log("Timeout ... again! 2");
}, 4);

function greeter(greetFn) {
    greetFn();
}

greeter(() => {
    console.log("Hello");
});

// execute all promise here
console.log("Hello3");

function init() {
    function greet() {
        console.log("Hello nested function");
    }

    greet();
}

init();
