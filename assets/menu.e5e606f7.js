import"./vendor.0bdabf0e.js";/* empty css              */window.addEventListener("DOMContentLoaded",(function(){(async function(){let e=await fetch("https://foobardata.herokuapp.com/beertypes");!function(e){!function(e){console.log(e);e.map(o).forEach(r)}(e)}(await e.json())})(),document.querySelectorAll(".move").forEach((e=>{e.addEventListener("click",(()=>{t=!t;const e=document.querySelector(".container");e.style.transform=t?"translateX(-100%)":"translateX(0%)"}))})),function(){const t=JSON.parse(localStorage.getItem("items"));e.push(...t),e.forEach((e=>{a(e),c(e)})),localStorage.setItem("orderedItems",JSON.stringify(e))}()}));const e=[];let t,n=0;function o(e){switch(e.size=.5,e.container="bottle",e.amount=1,e.category){case"European Lager":case"IPA":e.price=10;break;default:e.price=20}return e}function r(t){const n=document.querySelector("#bottletemplate").content.cloneNode(!0);n.querySelector(".name").textContent=t.name,n.querySelector(".description").textContent=t.description.appearance,n.querySelector("img").src="./images/beers-compressed/hollaback.png",n.querySelector("button").addEventListener("click",(()=>{var n;n=t,document.getElementById(n.name)?alert("The beer has already been added"):(a(n),c(n),function(t){e.push(t),localStorage.setItem("orderedItems",JSON.stringify(e))}(n))})),document.querySelector(".menu #bottles").appendChild(n)}function c(e){n+=e.price,document.querySelector("#price").textContent=n,console.log(e.price)}function a(e){const t=document.createElement("li");t.id=e.name;const n=document.createElement("img");n.src="/images/beers-compressed/"+e.label,t.appendChild(n),document.querySelector("#ordered-items").appendChild(t)}
