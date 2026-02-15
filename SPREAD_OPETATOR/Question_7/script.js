let user = { name: "Ali", address: { city: "Karachi" } };
let copyUser = { ...user };
copyUser.address.city = "Lahore";
console.log(user.address.city);
