var users = []
function onSubmit() {
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userPhone = document.getElementById("phone").value;
    console.log("function call" , userName, userEmail,userPhone);
var newUser = {
    name : userName,
    email : userEmail,
    phone :userPhone
}
users.push(newUser)
displayResult()
}
function displayResult(){
    var result =""
    for (let index = 0; index < users.length; index++){
    const user = users[index];  
    console.log("user", user);

result = result + `<div> <h1>Name: ${user.name}</h1> <p>Email: ${user.email}</p> <span>Phone: ${user.phone}</span> </div>`
    }
    console.log("resultresult",result);
    document.getElementById("result").innerHTML = result
}