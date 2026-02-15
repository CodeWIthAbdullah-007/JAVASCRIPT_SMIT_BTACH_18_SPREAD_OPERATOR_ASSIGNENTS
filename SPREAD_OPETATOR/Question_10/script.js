function combineData(objA, objB) {
    return { ...objA, ...objB };
}
console.log(combineData({ name: "Ali", age: 20 }, { age: 25, city: "Karachi" }));
