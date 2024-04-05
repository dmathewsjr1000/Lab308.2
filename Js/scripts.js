// Counting forwards
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// Counting backwards 
for (let a = 10; 10 > a; a--) {
	console.log(a);
}

// Counting only odd numbers and 2 different solutions
for (let b = 0; b <= 10; b += 2) {
    console.log(b);
    
}
for (let b = 0; b < 10; b++) {
    if (b % 2 !== 0) {
        console.log(b);
    }
	
}

// Counting only even numbers and 2 different solutions
for (let c = 0; c >= 10; c += 2) {
    console.log(c);
    
}

for (let c = 0; c >= 10; c++) {
    if (c % 2 == 0) {
        console.log(c);
    }
	
}

// Counting only three and 2 different solutions

for (let d = 6; d <= 60; d += 3) {
    console.log(d);
    
}

for (let d = 0; d >= 10; d++) {
    if (d % 3 == 0) {
        console.log(`${d}`);
    }
	
}

// Printing a Prymaid 2 different solutions

for (let f = 0; f <= 7; f++) {
 console.log('#'.repeat(f));
}

let hash = '';
for (let f = 0; f <= 7; f++) {
    hash += '#'
    console.log(hash);
   }

// =============== Loop over Strings ====

const msg = 'Hello World!!';

// console.log(msg.length);
// console.log(msg[0]);

// for (let index = 0; index < msg.length; index++) {
//     console.log(msg[index]);
// }


// For in Loop (objects)
for (const i in msg) {
    console.log(i);
    // console.log(msg[i]);
}

// For of Loop (strings, arrays)
for (const i of msg) {
    console.log(i);
}



//? ===== Looping over an object with (For in)

const user = {
    username: 'Alex',
    role: 'admin',
    age: 20,
    isVerified: true,
}

// console.log(user);

// for (const key in user) {
//     console.log(` ${key}: ${user[key]}`);
// }

//? ======= Looping over arrays (For of)

const fruits = ['apple', 'banana', 'mango'];

console.log(fruits);

for (const fruit of fruits) {
    console.log(fruit);
}

// ==== Continue Keyword
const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	if (str[i] == "l") {
		continue; // jumps to incrementor
        console.log('hi');
	}

	console.log(str[i]);
}

for (const i in str) {
	if (str[i] == "l") {
		continue; // jumps to next iteration
	}

	console.log(str[i]);
}

for (const c of str) {
	if (c == "l") {
		continue; // jumps to next iteration
	}

	console.log(c);
}
let i = 0;

while (i <= 10) {
    console.log(i);
    i++; // <====== increment
}

let j = 0;

while (j <= 20) {
    if (j % 2 === 0) {
        console.log(`${j} is even`);
    } else {
        console.log(`${j} is odd`);
    }

    j++;
}