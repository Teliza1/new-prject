let loveButton = document.querySelector(".in-love");
let button = document.querySelector(".results");
let survive = document.querySelector(".surviver");
let advice = document.querySelector("p");
let surviveButton = document.querySelector(".surviver");
let joel = document.querySelector(".joel");
let resultBtn = document.querySelector(".result");

loveButton.onclick = (function() {
  let loveInput = document.querySelector(".love").value;
  //type if statement here!
  if (loveInput === "feisty") {
    document.querySelector(".love-message").innerHTML = ("...");
    document.querySelector(".love-message").style.color = "green";
  }

  //type else statement here!
  else if (loveInput === "nice") {
    document.querySelector(".love-message").innerHTML = ("You have many friedns!!!");
    document.querySelector(".love-message").style.color = "green";
  }
  else {
    document.querySelector(".love-message").innerHTML = ("Hmm intresting");
    document.querySelector(".love-message").style.color = "green";
  }
})

surviveButton.onclick = (function() {
  let surviveInput = document.querySelector(".survive").value;
  //type if statement here!
  if (surviveInput === "summer") {
    document.querySelector(".survive-message").innerHTML = ("have some icecream!!!");
    document.querySelector(".survive-message").style.color = "green";
  }

  //type else statement here!
  else if (surviveInput === "winter") {
    document.querySelector(".survive-message").innerHTML = ("the cold doesnt bother you!");
    document.querySelector(".survive-message").style.color = "red";
  }

  else {
    document.querySelector(".survive-message").innerHTML = ("Hmm intresting");
    document.querySelector(".survive-message").style.color = "green";
  }
})

resultBtn.onclick = (function(){
if (love ==="feisty" && survive ==="summer"){
}ariel.style = "display: block";})
else if (love ==="feisty" && survive ==="winter"){
}elsa.style = "display:block";{
  else if (love ==="nice" && survive ==="summer"){
  snowwhite.style= "display:block";{
    else if (love ==="nice" && survive ==="winter"){
  alice.style= "display:block";
}}

