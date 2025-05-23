console.log("== control structure ==");

const someValue = 10;

if (someValue === 10) {
    console.log("someValue is equal to 10");
} else if (someValue > 10) {
    console.log("someValue is greater than 10");
} else if (someValue < 10) {
    console.log("someValue is less than 10");
} else {
    console.log("someValue is not equal to 10");
}

const hobbies = ["Sports", "Cooking", "Readding"];

for (let hobby of hobbies) {
    console.log(hobby);
}
