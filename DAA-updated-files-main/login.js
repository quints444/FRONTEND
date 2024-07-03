document.getElementById("eyeicon").onclick = function() {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById("eyeicon").src = "daaimages/openeye.png";
    } else {
        password.type = "password";
        document.getElementById("eyeicon").src = "daaimages/closeeye.png";
    }
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Arron" && password === "ken") {
        window.location.href = "stallpage.html";
    } else {
        alert("Invalid username or password");
    }
}
