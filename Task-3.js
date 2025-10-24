let c=4
let num=""
for(let i=0; i<c; i++){
    num+="*"
    for(let j=0; j<i; j++){
    }
    console.log(num)
}

//2. *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********
let b=5
for(i=b;i>1;i--){
    let some=""
    for(j=b-i;j>0;j--){  
        some+=" "
    }
    for(k=2*i-1;k>0;k--){
        some+="*"
    }
    console.log(some)
}
for(i=1;i<=b;i++){
    let some=""
    for(j=0;j<b-i;j++){
        some+=" "
    }
    for(k=0;k<2*i-1;k++){
        some+="*"
    }
    console.log(some)
}

 let a=7
 for(i=1;i<=a;i++){
    let some=""
    for(j=1;j<=i;j++){
        if(j==i|| j==1 || i==7){
        some+="* "
        }
        else{
          some+="  "
        }
    }
    console.log(some)
 }

// Task 4: Multiplication Table Grid
// Write a JavaScript program using nested for loops that:
// Prints a 10×10 multiplication table (from 1×1 up to 10×10).
// Each row should represent one number’s multiplication.
// Format it neatly like a table.
// Output:
//    1   2   3   4   5   6   7   8   9  10
//    2   4   6   8  10  12  14  16  18  20
//    3   6   9  12  15  18  21  24  27  30
//    4   8  12  16  20  24  28  32  36  40
//    5  10  15  20  25  30  35  40  45  50
//    6  12  18  24  30  36  42  48  54  60
//    7  14  21  28  35  42  49  56  63  70
//    8  16  24  32  40  48  56  64  72  80
//    9  18  27  36  45  54  63  72  81  90
//   10  20  30  40  50  60  70  80  90 100
let m=10
for(i=1;i<=m;i++){
    let tab=" "
    for(j=1;j<=m;j++){
        let mul=(i*j)
        if(mul<10){
         tab+="   "+mul
        }
        else if(mul<100){
        tab+="  "+mul
        }
        else{
         tab+=" "+mul   
        }
    }
    console.log(tab)
}
//Task-5  day and time using switch case and if else
// 1  - 4 early morning ;
// 5  to 9 morning ;
// 10  to 12  late morning ;
// 13 - 15 afternoon ;
//  16 -  20  evening ;
// 20 - 24night.
function daytime(time) {
    let timing = "";
    if(time<1 || time>24){
        return "Invalid time"}
        
    else{
    switch (true) {
        case (time >= 1 && time < 5):
            timing = "Early moring" + "-->" + time + " a.m";
            break;
        case (time > 5 && time <= 9):
            timing = "Moring"+"-->"+time+" a.m"
            break;
        case (time > 9 && time <= 12):
            timing = "Late moring"+"-->"+time+" a.m" ;
            break;
        case (time > 12 && time <= 15):
            timing = "Afternoon"+"-->"+time+" p.m" ;
            break;
        case (time > 15 && time <= 20):
            timing = "Evening" +"-->"+time+" p.m";
            break;
        case (time > 20 && time <= 24):
            timing = "Night"+"-->"+time+" p.m";
            break;
        default:
            timing = "";
    }
    return timing;
}
}
let input = 27;
console.log("Time of day:", daytime(input))

// Task-6: Print Chessboard Pattern (8×8)
// Use nested for loops
// Alternate between black (■) and white (□) squares
// Print it as a grid
//Output:■ □ ■ □ ■ □ ■ □
// □ ■ □ ■ □ ■ □ ■
// ■ □ ■ □ ■ □ ■ □
// □ ■ □ ■ □ ■ □ ■
// ■ □ ■ □ ■ □ ■ □
// □ ■ □ ■ □ ■ □ ■
// ■ □ ■ □ ■ □ ■ □
// □ ■ □ ■ □ ■ □ ■
let n=8
for(i=1;i<=n;i++){
    let some=" "
    for(j=1;j<=n;j++){
        if((i+j)%2==0){
            some+="🔳"+" "
        }
        else{
            some+="🔲"+" "
        }
    }
    console.log(some)
}

// Task-7:Bank Account Simulation (Function Expression)
// Write a program using function expressions that:
// Creates a bank account with an initial balance.
// Provides functions to:
// deposit(amount) → add money
// withdraw(amount) → remove money (if balance is enough)
// checkBalance() → display balance
// All functions should be written as function expressions.let amount=10,000;
 let account_simulation = function(){
    initial_amount=10000
    console.log("Your bank account is created with initial amount: Rs."+initial_amount)
    let deposit=function(){
        deposit=2000
    console.log("Your deposited amount: Rs. "+ deposit)
        total=initial_amount+deposit
    console.log("Your total amount is Rs: "+total)
        let withdraw=function(){
             withdraw=12000
            if(withdraw>total){
                console.log("You have insufficient amount")
            }
            else{
                console.log("You have withdraw amount: Rs."+withdraw)
            }
            let checkBalance=function(){
                balance=total-withdraw
                if(balance>=5000){
                    console.log("Your account balance is Rs."+ balance)
                }
                else{
                    console.log("Your account balance is Rs."+ balance)
                    console.log("You are not maintaining minimum balance. Please maintain minimum balance")
                }
            }
            checkBalance()
        }
        withdraw()
    }
    deposit()
}
 account_simulation()
