const ratings = document.querySelectorAll("div.rating");
const paragraphinfo = document.getElementById("info");
const thankyoustate = document.getElementById("thankyoustate");
const card = document.getElementById("card");
// window.location.href = "./index.html";

ratings.forEach((div) => {
  div.addEventListener("click", (e) => {
    div.style.background = "##959eac";
    card.style.display = "none";
    thankyoustate.style.display = "block";
    paragraphinfo.innerHTML = `You selected ${div.innerHTML} out of 5`;
  });
});

setInterval(function removeEventListener() {
    
}, 5000)
