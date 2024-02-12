const jwt = require("jsonwebtoken");

const user = {
    username : "mangesh",
    accountNumber :"123434312",
    country : "india" 
}

const token = jwt.sign(user,"secrete");
console.log(token);