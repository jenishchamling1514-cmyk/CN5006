/*program that performs basic arithmetic operations on two numbers
author = u3220857
30th sept 2026
*/

const num1 = 20;
const num2 = 5;

const sum = num1 + num2 ;
const difference = num1 - num2 ;
const product = num1 * num2 ;

console.log('The sum is: ' + sum);
console.log('The difference is: ' + difference);
console.log('The product is: ' + product);

if (num2 >=num1 ) 
    {
    const div = num2 / num1;
    console.log('num2/num1: ' + div);
} 
else 
    {
    const div = num1 / num2;
    console.log('num1/num2: ' + div);
}