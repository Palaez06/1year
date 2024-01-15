let givenpassword;

document.getElementById("button1").onclick = function (){
    givenpassword = document.getElementById("textbox1").value;
    let  password = givenpassword == -0.961261695 ? window.location.assign("backup.html") : 
    "You've entered the wrong password, please try again.";
    document.getElementById("myh2").textContent = password;
}