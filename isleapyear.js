// To check leap year is or not
let x=prompt("Enter a year ");

if(x%100==0)
{
    if(x%400==0)
        console.log(`${x} is a leap year`);
    else
    console.log(`${x} is not a leap year`);

}
else
{
    if(x%4==0)
    console.log(`${x} is a leap year`);
    else
    console.log(`${x} is not a leap year`);
}
 