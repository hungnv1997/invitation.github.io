import{_ as d,b as i,d as a,o as c,c as o,a as s}from"./index-7462fe9d.js";const r={setup(){function t(){const e=document.getElementById("card1");e.style.height=n.height,e.style.width=n.width}const n={width:window.innerWidth<window.innerHeight?"90vw":"calc(90vh/1.4)",height:window.innerWidth<window.innerHeight?"calc(1.4*90vw)":"90vh"};return i(()=>{let e=document.getElementById("card1");e.addEventListener("click",function(){e.classList.toggle("active")}),window.addEventListener("resize",t),t()}),a(()=>{window.removeEventListener("resize",t)}),{}}},v=s('<div class="cards" id="card1" data-v-c0220874><div id="overlay1" data-v-c0220874></div><span id="open" data-v-c0220874>Open</span><div id="overlay2" data-v-c0220874></div><div class="wedding-card" data-v-c0220874></div></div>',1),_=[v];function l(t,n,e,h,w,p){return c(),o("main",null,_)}const g=d(r,[["render",l],["__scopeId","data-v-c0220874"]]);export{g as default};
