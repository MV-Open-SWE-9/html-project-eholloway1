const aboutButt = document.querySelectorAll("#aboutMe");
const portfolioButt = document.querySelectorAll("#portfolio");
const expButt = document.querySelectorAll("#exp");
const homeButt = document.querySelectorAll("#home");

for(let i = 0; i < aboutButt.length; i++){
    aboutButt[i].addEventListener("click", function() {
        window.location.href = "bio.html";
    })
}

for(let i = 0; i < portfolioButt.length; i++){
    portfolioButt[i].addEventListener("click", function() {
        window.location.href = "portfolio.html";
    })
}

for(let i = 0; i < expButt.length; i++){
    expButt[i].addEventListener("click", function() {
        window.location.href = "experience.html";
    })
}

for(let i = 0; i < homeButt.length; i++){
    homeButt[i].addEventListener("click", function() {
        window.location.href = "index.html";
    })
}