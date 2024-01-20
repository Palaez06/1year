document.getElementById("submitBtn").onclick = function () {
    let givennick = document.getElementById("textbox1").value.trim().toLowerCase();
    let nick = givennick == "washi" ? window.location.assign("backup2.html"):
    document.getElementById("h2").textContent = "You entered the wrong password";
}