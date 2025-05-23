console.log("== destructuring ==");

const userNameData = ["Max", "Schwarzmuller"];

const firstName = userNameData[0];
const lastName = userNameData[1];
console.log(firstName, lastName);

const [firstName2, lastName2] = userNameData;
console.log(firstName2, lastName2);

const user = {
    firstName: "Max",
    lastName: "Schwarzmuller",
};

const firstName3 = user.firstName;
const lastName3 = user.lastName;
console.log(firstName3, lastName3);

const user2 = {
    firstName: "Max",
    lastName: "Schwarzmuller",
};

const { firstName: firstName4, lastName: lastName4 } = user2;
console.log(firstName4, lastName4);

function storeOrder(order) {
    localStorage.setItem("id", order.id);
    localStorage.setItem("currency", order.currency);
    console.log(localStorage);
}

storeOrder({
    id: 1,
    currency: "USD",
});

function storeOrder2({ id, currency }) {
    localStorage.setItem("id", id);
    localStorage.setItem("currency", currency);
    console.log(localStorage);
}

storeOrder2({
    id: 2,
    currency: "USD",
});
console.log("hi");
