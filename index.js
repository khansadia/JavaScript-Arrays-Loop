/* //You can also get the length of the array like this:
const numbers = [1, 2, 3, 7, 10, 57, 4];

const length = numbers.length;

console.log(length);
//To acces an element you use square brackets in combination with the index position.

const ages = [18, 34, 67, 7, 2];
// index  =  [0 , 1 , 2 , 3, 4]

console.log(ages[2]);
console.log(ages[4]);
// There is also another way to acces elements in an array, by using the _at()_ method.
console.log(ages.at(-2)); // it gives 2
console.log(ages.at(-6)); // it gives undefined because there is no value on this index


// Changing values of elements
const names = ["Henrik", "Niklas", "Erik", "Sofia"];

console.log(names[1]); // Niklas
names[1] = "Peter";
console.log(names[1]); // Peter
console.log(names);

        // push in array 

        const cars = ["Volvo", "Volkswagen", "Ferrari", "Audi"];

        cars.push("Aston Martin");
        
        // If we want to know the new length, we could save that as well.
        const newLength = cars.push("BWV");
        console.log(newLength);
        
        console.log(cars); */
// unshift()` works in the same way as `push()` but it adds the element to the beginning of the array instead.

        let numbers = [5, 2, 7, 9, 10];
        console.log(numbers);
numbers.unshift(12, 20);

console.log(numbers);

// ### Removing Elements

const cities = ["Stockholm", "Göteborg", "Örebro"];

cities.pop(); // We can ignore the return value
console.log(); // ["Stockholm", "Göteborg"]

const city = cities.shift();
console.log(); //["Göteborg"]
console.log(city);

