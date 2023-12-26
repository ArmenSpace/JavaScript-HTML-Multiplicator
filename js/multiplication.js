let maxAttempts = 10
let score = 0
let isGenerated = false
let img1 = "../images/multTable.jpg"
let img2 = "../images/strawberry-facts1.jpg"
window.onload = function () {
    onInit()
}

function onInit() {
    document.getElementById("textField").disabled = true;
    document.getElementById("textField2").disabled = true;
    document.getElementById("textFinal").disabled = true;
    document.getElementById("maxTries").innerText = maxAttempts.toString()
    document.getElementById("image").style.visibility = 'hidden'
}

function generate() {
    let num1 = Math.round(Math.random() * 9)
    let num2 = Math.round(Math.random() * 9)
    document.getElementById("textField").value = num1
    document.getElementById("textField2").value = num2
    isGenerated = true
    document.getElementById("generate").disabled = true
}

function isEmpty(inputString) {
    return inputString.trim().length === 0
}

function check() {
    console.log("check")
    let checkedTextFieldValue = document.getElementById("textFieldChecked").value;
    if (isGenerated && !isEmpty(checkedTextFieldValue)) {

        maxAttempts--
        document.getElementById("maxTries").innerText = maxAttempts.toString();
        if (maxAttempts === 0) {
            if (score >= 8) {
                document.getElementById("image").src = img2;
                document.getElementById("image").style.visibility = 'visible'
            }
            if (score <= 3) {
                document.getElementById("image").src = img1;
                document.getElementById("image").style.visibility = 'visible'
            }
            document.getElementById("textFinal").innerHTML = "Tries Expired";
        } else {
            document.getElementById("textFinal").innerHTML = document.getElementById("textField").value
                * document.getElementById("textField2").value;
            document.getElementById("textFieldChecked").disabled = true;
            document.getElementById("textFinal").disabled = true
            if (document.getElementById("textFinal").value ===
                document.getElementById("textFieldChecked").value) {
                score++
            }
        }

    }

}

function reset() {
    if (maxAttempts === 0) {
        maxAttempts = 10;
        document.getElementById("maxTries").innerText = maxAttempts.toString();
        document.getElementById("generate").disabled = true;
        document.getElementById("check").disabled = true;
        document.getElementById("textFieldChecked").disabled = true;
        document.getElementById("textFinal").disabled = true;
        document.getElementById("reset").disabled = true;
    } else {
        document.getElementById("textField").value = null;
        document.getElementById("textField2").value = null
        document.getElementById("textFinal").innerHTML = null
        document.getElementById("textFieldChecked").value = null
        document.getElementById("textFieldChecked").disabled = false
        document.getElementById("textFinal").disabled = false
        document.getElementById("generate").disabled = false
    }
}


