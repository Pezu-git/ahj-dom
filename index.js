(()=>{"use strict";var e=document.createElement("div");e.classList.add("board"),document.body.appendChild(e);for(var a=[],t=0;t<16;t++){var d=document.createElement("div");d.classList.add("map"),e.appendChild(d);var i=document.createElement("div");i.classList.add("img"),d.appendChild(i);var c=new Image;c.src="https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true",c.classList.add("goblin"),i.appendChild(c)}setInterval((function(){return function(e){for(var t=Math.ceil(0),d=Math.floor(e),i=Math.floor(Math.random()*(d-t)),c=document.querySelectorAll(".goblin"),o=document.querySelector(".active");a[0]===i&&i>t;)c[i-1].classList.add("active"),a[0]=i-1;for(;a[0]===i&&i<d-1;)c[i+1].classList.add("active"),a[0]=i+1;c[i].classList.add("active"),a[0]=i,o&&o.classList.remove("active")}(16)}),600)})();