let givensubject;

document.getElementById("submitBtn").onclick = function (){
    givensubject = document.getElementById("textbox1").value.toLowerCase();
    let subject = givensubject == "physics"? window.location.assign("Happy1year.html") : 
    "that's wrong";
    document.getElementById("h2").textContent = subject;
}