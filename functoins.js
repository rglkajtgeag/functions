// /Write a function add(a, b) that takes two numbers a and b as arguments and returns their sum.
// Write a function subtract(a, b) that returns the result of subtracting b from a.
// Write a function multiply(a, b) that takes two numbers and returns their product.
// Write a function divide(a, b) that returns the result of dividing a by b. If b is zero, the function should return a message saying "Cannot divide by zero."


function add(a,b){
    return a+b;
}
add(2,3);
console.log(add(2,3));

function subtract(a,b){
return a-b;
}
console.log(subtract(5,3));


function multiply(a,b){
    return a*b;
    }
 console.log(multiply(5,3));


    
 function divide(a,b){
    if (b==0){
        console.log("Cannot divide by zero.")
    };
    return a/b
    }
 divide(5,3);
 console.log(divide(5,3));
    
    
       
    