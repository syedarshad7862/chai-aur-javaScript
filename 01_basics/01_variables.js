const AccountId = 144587
let AccountEmail = "staywithcode@gmai.com";
var AccountPassword = "arshad76843"

/*
const AccountId = 55501
the const variables are not reassign value and can't redeclare.

let AccountEmail = "arshad@gmail.com"
the let variables can reassign value and can't redeclare.

var variables can reassign value and can be redeclare.

*/

console.table([AccountId,AccountEmail,AccountPassword])


/*
Scope means where variables can be accessed in the code.
*/

// var variables are functional scope means we can't access in outside the function but it can access in  
// both let,const variables are block scope means we can't access in outside the block (if,for,function,{}) 
function test(){
    var name = "arhad"
    if(true){
        let a = 10
        console.log(name);
        
    }
    let a = 20
    console.log(a);
    
}
test()
// var a = 30

// console.log(a);
console.log(b);

if(true){
    var b = 10
    // const b = 20
}


