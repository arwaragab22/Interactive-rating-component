let colectionbutton = document.querySelectorAll(".btn button");
let parentdiv = document.querySelector(".btn");
let selectvalue;
parentdiv.addEventListener("mouseover", function (event) {
  if (event.target.className == "click") {
  
    event.target.style.backgroundColor = "orange";
  
  }
});
parentdiv.addEventListener("click", function (e) {
  if (e.target.className == "click") {
    selectvalue = e.target.innerHTML;
   


     }
  
});


      
parentdiv.addEventListener("mouseout", function (e) {
  if (e.target.className == "click") {
    e.target.style.backgroundColor = "gray";
    setTimeout(function () {
      e.target.style.backgroundColor = "#082032";
    },500)
   
  }
});
let sub1 = document.querySelector("input");
sub1.onclick = function () {
  document.querySelector(".appear").style.display = "none";
  document.querySelector(".hide").classList.remove("hide");
let scorediv = document.querySelector(".score");

scorediv.innerText = `You selected ${selectvalue} out of 5`;
}

