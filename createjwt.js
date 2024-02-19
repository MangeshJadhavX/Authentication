//we created new token (secrete) is important
//first step is import a jwt library in your code
//we  can update this code more

const jwt = require("jsonwebtoken");

const user = {
    username : "mangesh",
    accountNumber :"123434312",
    country : "india" 
}

const token = jwt.sign(user,"secrete");
console.log(token);