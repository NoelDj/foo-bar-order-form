/* empty css              */import{C as e}from"./vendor.0bdabf0e.js";new e("#cardNumber",{creditCard:!0,delimiter:" ",blocks:[4,4,4,4]}),new e("#date",{date:!0,datePattern:["m","y"]}),new e("#security-code",{numericOnly:!0,blocks:[4]}),document.querySelector("input[type=submit]").addEventListener("click",(function(e){const t=document.querySelectorAll("input[type=text]");4==Array.from(t).filter((e=>""!==e.value)).length&&(e.preventDefault(),window.location.href="./completed.html")}));
