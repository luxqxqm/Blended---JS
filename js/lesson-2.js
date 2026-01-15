// zad 1
const styles = ["jazz", "blues"];
styles.push("rock-n-roll")
styles[1] = "classic"


function logItems(array) {
    for (let i = 1; i < array.length; i++){
        console.log(`${i} - ${array[i]}`);
        
    }    
}
logItems(styles)

// zad 2

const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
    let name = prompt("Подайте ім'я")
    
    if (array.includes(name)) {
        alert(`Welcome ${name}!`);
    }else {
        alert("User not found");
    }
}


// checkLogin(logins)



// zad 3

function caclculateAverage(...args) {
    let total = 0;
    for (let item of args) {
        total += item
    }
    return total / args.length
}


console.log(caclculateAverage(1, 2, 3, 4))


// zad 4
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
function collapsePair(array) {
    let wynik = [];

    for (let i = 0; i < array.length - 1; i++){
        wynik.push(array[i] + array[i+ 1]);   
    }
    return wynik
}
console.log(collapsePair(someArr));


// zad 5
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3]; 

function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0]
    if (Array.isArray(numbers)) {
        for (let item of numbers) {
            if (smallestNumber > item) {
            smallestNumber = item
        }
            
            
        }
    }
    else {
        return 'Sory, it is not an array!'
        
    }
    return smallestNumber
}



console.log(findSmallestNumber(numbers))

// zad 6

function findLongestWord(string) {
    let newString = string.split(" ")
    let longestWord = newString[0]

    for (let item of newString) {
        
        if (longestWord.length < item.length) {
            longestWord = item
        }
    }
    return longestWord
}


console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// zad 7

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
  };

user.mood = "happy"
user.hobby = "skydiving"
user.premium = false;

console.log(user);

// zad 8

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };


const sum = obj => {
    let total = 0
    if (Object.keys(obj).length === 0) {
        return 0
    }

    for (let item in obj) {
        total += obj[item];
        
    }
    return total
}

console.log(sum(salaries));


// zad 9

const calculator = {
    read(a, b) {
        this.firstNumber = a;
        this.secondNumber = b; 
    },
    sum() { 
        if (this.exist() === false) {
            return 'No such propeties'
        }
        let total = 0
        total += this.firstNumber;
        total += this.secondNumber
        return total
    },
    mult() { 
         if (this.exist() === false) {
            return 'No such propeties'
        }
        let total = 1;
        total *= this.firstNumber
        total *= this.secondNumber
        return total
    },
    exist() {
        if (this.firstNumber !== undefined && this.secondNumber !== undefined) {
            return true
        }
        
        return false
    },
    

}

console.log(calculator.sum())        
calculator.read(0, 5)
console.log(calculator.sum())        
console.log(calculator.mult())       

console.log(calculator.exist());




// zad 10
const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
  ];

function calcTotalPrice(fruits, fruitName) {
    let newFruitName = fruitName.toLowerCase()
    let total = 0;
    for (let item of fruits) {
        if (item.name.toLowerCase() === newFruitName) {
        total += item.quantity * item.price
    
}        
    }
    return total

    
}

console.log(calcTotalPrice(fruits, "бАНАН"))



