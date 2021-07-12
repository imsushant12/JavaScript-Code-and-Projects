firstName = "Sushant";
lastName = "Gaurav";
userID = "imsushant12";
password = "*******";
address = "Bhopal, Madhya Pradesh";
loginWithGoogle = true;
loginWithFacebook = false;
loginWithTwitter = false;

if (loginWithFacebook) 
    loggedIn = "Facebook";
else if (loginWithTwitter) 
    loggedIn = "Twitter";
else 
    loggedIn = "Google";

console.log(`
    Full name of user is : ${firstName} ${lastName}.
    User Id is : ${userID}
    User's Address is : ${address}.
    Logged in using : ${loggedIn}.
`);

