import orderByProps from "./js/app.js";


// For example
const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
console.log(orderByProps(person, ["name", "level"]));
console.log(orderByProps(person));
