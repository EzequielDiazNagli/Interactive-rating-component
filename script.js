'use strict';

const btn = document.getElementById("btn");
const containerA = document.querySelector(".containerA");
const containerB = document.querySelector(".containerB");
const selectedStar = document.querySelector(".selectedStar");
const ratingList = document.getElementById("ratingList")
const ulList = document.querySelector(".ulList");

let rate = 0;

ratingList.addEventListener("click", function(e){
    e.target.classList.add("list")
    e.target.classList.remove("ulList")
    rate = e.target.innerText;
})

btn.addEventListener("click", function() {
    containerA.classList.toggle("hidden")
    containerB.classList.toggle("hidden")
    selectedStar.innerText = `You selected ${rate} out of 5`
})
