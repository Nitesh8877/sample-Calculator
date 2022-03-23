console.log("Enter 1 For Addition Two Number");
console.log("Enter 2 For Substraction Two Number");
console.log("Enter 3 For Multiflication Two Number");
console.log("Enter 4 For Module Two Number");
console.log("Enter 5 For Divide Two Number");
console.log("----------------Please Choose the one of this given number------------");
var number=parseInt(prompt("Enter the Number "));
var num1=parseInt(prompt("Enter First Number"));
var num2=parseInt(prompt("Enter Second Number"));

switch(number){
    case 1:
        console.log(num1+num2);
        break;
        case 2:
            console.log(num1-num2);
            break;
            case 3:
                console.log(num1*num2);
                break;
                case 4:
                    console.log(num1%num2);
                    break;
                    case 5:
                        console.log(num1/num2);
                        break;
                        default:
                            console.log("you enter number is invalid please enter the above given number");
}