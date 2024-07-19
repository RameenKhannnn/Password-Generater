var Password = document.getElementById(Password)
function genPassword(){
    var chars = 
    "1234567890abcefghiklmnopqrstuvwxyz!@#$%^&*(){}+?/<>ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 10;
    var password = "";
    for (var i = 0; i <= passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
        //Now Apply It
        document.getElementById('password').value = password;
        
    }
}

genPassword()
genPassword()
