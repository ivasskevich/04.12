let car = new Car("Audi", "A5", 2018, 100);
console.log("Task 1");
console.log(car.displayInfo());

let travelTime = car.calculateTravelTime(600);
console.log(`Need time for 600 km per: ${car.calculateTravelTime(600)} hours.`);

let frac1 = new Fraction(1, 2);
let frac2 = new Fraction(3, 4);
console.log("Task 2");
let sum = frac1.add(frac2);
console.log(`Sum: ${sum.a}/${sum.b}`);

let dif = frac1.subtract(frac2);
console.log(`Difference: ${dif.a}/${dif.b}`);

let multip = frac1.multiply(frac2);
console.log(`Multiply: ${multip.a}/${multip.b}`);

let division = frac1.divide(frac2);
console.log(`Division: ${division.a}/${division.b}`);

console.log("Task 3");
let currentTime = new Time(20, 15, 30);
console.log("Current Time:", currentTime.displayTime());

currentTime.addsec(20);
console.log("Add 20 seconds:", currentTime.displayTime());

currentTime.addmin(15);
console.log("Add 15 minutes:", currentTime.displayTime());

currentTime.addh(2);
console.log("Add 2 hours:", currentTime.displayTime());