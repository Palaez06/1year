setTimeout(() => document.getElementById("h1").textContent = "I love you so so so much", 3000);

setTimeout(() => document.getElementById("h2").textContent = "Wahh!! ambilis ng panahon noh?", 5000);

setTimeout(() => document.getElementById("h3").textContent = "Mwahhhhhh 😚😚", 7000);

setTimeout(() => document.getElementById("p1").textContent = "I made this site as a gift to you.", 9000);

setTimeout(() => document.getElementById("p2").textContent = "As of now di pako nag hihirap since December palang as of now. HAHAHAHAH", 12000);

setTimeout(() => document.getElementById("p3").textContent = "But I'm expecting na mag hihirap ako dito.", 14000);

setTimeout(() => document.getElementById("p4").textContent = "However, I feel that this will be very worth it.", 16000);

setTimeout(() => document.getElementById("p5").textContent = "Since it's for you.",18000);

setTimeout(() => document.getElementById("p6").textContent = "I love you so so so much bebiiiii.", 21000);

const next = document.getElementById("next");

setTimeout(function display(){
    next.style.display = "block";
}, 25000);

next.onclick = () => window.location.assign("Iloveyoubebi.html");