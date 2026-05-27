// =======================
// Exercise 1: Temperature Check
// =======================

let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature <= 15) {
    console.log("It's cold.");
} else if (temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Switch version
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}


// =======================
// Exercise 2: Divisibility Check
// =======================

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both");
} else if (number % 2 === 0) {
    console.log("Divisible by 2");
} else if (number % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible");
}

// Switch version
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3");
        break;
    default:
        console.log("Not divisible");
}


// =======================
// Exercise 3: For Loops
// =======================

// 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Even numbers 1 - 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// Sum 1 - 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Array 1
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

// Largest number
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(largest);


// =======================
// Exercise 4: While Loop
// =======================

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 2;
while (j <= 20) {
    if (j % 2 === 0) console.log(j);
    j++;
}

let total = 0;
let k = 1;
while (k <= 100) {
    total += k;
    k++;
}
console.log(total);

// multiples of 5 < 50
let m = 5;
while (m < 50) {
    console.log(m);
    m += 5;
}


// =======================
// Exercise 5: Do While
// =======================

let x1 = 1;
do {
    console.log(x1);
    x1++;
} while (x1 <= 10);

let sum2 = 0;
let y1 = 1;
do {
    sum2 += y1;
    y1++;
} while (y1 <= 100);
console.log(sum2);

// Guessing game (simple version)
let secret = 7;
let guess;

do {
    guess = 7; // replace with prompt in browser if needed
} while (guess !== secret);