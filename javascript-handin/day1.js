//TODO: day one excercises

// Function Declaration
function add(n1, n2) {
    return n1 + n2;
}

// Function Expression
const sub = function (n1, n2) {
    return n1 - n2;
}

// Callback example
const cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
}


// TODO: what will it print
console.log( add(1,2)); // 3
console.log( add )  // It will print out the add function: function add(n1, n2){ return n1 + n2;}
console.log( add(1,2,3) ) ; // 3
console.log( add(1) );	  // Nan (NotaNumber)
console.log( cb(3,3,add) ); // Result from the two numbers 3+3 = 6
console.log( cb(4,3,sub) ); // Result from the two numbers 4-3 = 1
console.log(cb(3,3,add())); // The code prints an error because add() is called as a function,
// but it doesn't return another function needed for cb.
// SO Removing the extra parentheses makes it work by using add as a callback.
console.log(cb(3,"hh",add)) ; // Result from the two numbers 3 + hh = 3hh