console.log("== arrays ==");

const hobbies = ["Sports", "Cooking", "Readding"];
console.log(hobbies[0]);

hobbies.push("Coding");
console.log(hobbies);

const idx = hobbies.findIndex((item) => {
    return item === "Cooking";
});
console.log(idx);

const editedHobbies = hobbies.map((item) => item + "!");

console.log(editedHobbies);

const editedHobbies2 = hobbies.map((item) => ({ text: item + "!" }));
console.log(editedHobbies2);
