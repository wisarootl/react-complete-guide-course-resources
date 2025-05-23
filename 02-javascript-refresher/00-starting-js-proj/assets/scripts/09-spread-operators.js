console.log("== spread operators ==");

const hobbies = ["Sports", "Cooking", "Readding"];
const user = {
    firstName: "Max",
    lastName: "Schwarzmuller",
};

const newHobbies = ["Coding"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
    ...user,
    age: 30,
};
console.log(extendedUser);
