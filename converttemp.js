
let temp=prompt("Enter the temperature ");
//let choice=prompt("Enter your choice");// It is not working
let choice=1;


switch(choice)
{
    case 1:
        let f= 1.8*temp+32;
      console.log(`${temp}C is equal to ${f}F`);
        break;

    case 2:
     let c=(temp-32)*5/9;
    
     console.log(`${temp}F is equal to ${c}C`);
        break;
    default:
     
        console.log("Invalid Choice");
        break;





}

