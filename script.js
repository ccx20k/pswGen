//Generates random psw
function pswGener();

    //user sets psw length
    let lenSel = document.getElementById("lenSel").value;

    let vlaues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

    let password = ""