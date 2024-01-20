let givenname;

document.getElementById("submitBtn").onclick = function(){
    givenname = document.getElementById("textbox1").value.trim().toLowerCase();
    let name = givenname == "monkey" ? window.location.assign("backup3.html") :
    "you entered the wrong password";
    document.getElementById("h2").textContent = name;
}