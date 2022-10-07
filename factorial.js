//To find factorial of a number...

let num = prompt("Enter a number ");
let x=num;
let fact=1;
while(num>0)
{
   
    fact=fact*num;
    num--;
}
console.log(`Factorial of ${x} is equal to ${fact}`);
