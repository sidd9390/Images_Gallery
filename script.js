let latest = document.getElementById("latest");
let popular = document.getElementById("popular");
let all = document.getElementById("all");
let card = document.getElementById("card");
function latest_(){
    popular.style.display = "none";
    latest.style.display = "flex";
    all.style.display = "none";
    document.getElementById("h1").style.borderBottomColor = "blueviolet";
    document.getElementById("h2").style.borderBottomColor = "transparent";
    document.getElementById("h3").style.borderBottomColor = "transparent";
}
function popular_(){
    popular.style.display = "flex";
    latest.style.display = "none";
    all.style.display = "none";
    document.getElementById("h1").style.borderBottomColor = "transparent";
    document.getElementById("h2").style.borderBottomColor = "blueviolet";
    document.getElementById("h3").style.borderBottomColor = "transparent";
}
function all_(){
    popular.style.display = "none";
    latest.style.display = "none";
    all.style.display = "flex";
    document.getElementById("h1").style.borderBottomColor = "transparent";
    document.getElementById("h2").style.borderBottomColor = "transparent";
    document.getElementById("h3").style.borderBottomColor = "blueviolet";
}
function image(pic){
    card.style.display = "flex";
    document.getElementById("full_img").src = pic;
}
function closing(){
    card.style.display = "none";
}