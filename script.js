
for (let i = 1; i <= 5; i++) {
    console.log("Roll Number:", i);
}



let item = 1;


while (item <= 3) {
    console.log("Item Number:", item);
    item++; 
}

let correctPin = "1234";
let userPin;


do {
    userPin = prompt("Enter your PIN");

} while (userPin !== correctPin);


alert("PIN Verified Successfully");



let times = prompt("How many times do you want to print Hello?");


times = Number(times);

/
for (let i = 1; i <= times; i++) {
    console.log("Hello");
}



for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Even Number:", i);
    }
}
