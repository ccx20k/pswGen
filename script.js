//Generates random psw
function pswGener() {

    //user sets psw length
    let lenSel = document.getElementById("lenSel").value;

    if (lenSel < 8 || lenSel > 128) {
        alert("Pick a different number please!");
        return;
    }

    //password generation back end
    let values = "";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let specChar = "!@#$%^&*()";

    let password = ""

    //questionaire
    let wantsUpperCase = confirm("Do you want upper case characters?")
    let wantsLowerCase = confirm("Do you want lower case characters?")
    let wantsNums = confirm("Do you want numerical characters?")
    let wantsSpecChar = confirm("Do you want special characters?")

    
    if (wantsUpperCase === true) {
        values += upperCase
    }

    if (wantsLowerCase === true) {
        values += lowerCase
    }

    if (wantsNums === true) {
        values += nums
    }

    if (wantsSpecChar === true) {
        values += specChar
    }

    if (values.length === 0) {
        alert("You cannot have a password with no characters")
        return;
    }

    // loop to select characters to .length of lenSel
    for (let i = 0; i <= lenSel; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //display gen'd password
    document.getElementById("password").value = password;
}

// copy button logic
document.querySelector("#copy").onclick = function () {
    document.querySelector("#password").select();
    document.execCommand('copy');
}