!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(a){a.preventDefault(),t.disabled=!0,e.disabled=!1,timeColorId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(a){a.preventDefault(),clearInterval(timeColorId),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.49867f91.js.map
