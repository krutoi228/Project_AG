document.getElementById("switchMode").onclick=function(){let e=document.getElementById("theem");"assets/css/style.min.css"==e.getAttribute("href")?e.href="assets/css/style_darc.min.css":e.href="assets/css/style.min.css"},function(){const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}))}(),ymaps.ready((function(){var e=new ymaps.Map("map",{center:[57.043028437225864,34.969132118486264],zoom:18}),t=new ymaps.Placemark([57.043028437225864,34.969132118486264],{balloonContent:'\n                <div class="balloon">\n                    <div class="balloon__address">\n                        Алгоритмека Торжок\n                    </div>\n                    <div class="balloon__contacts">\n                        Python-Start\n                    </div>\n                </div>\n\n            '},{iconLayout:"default#image",iconImageHref:"assets/images/Label.svg",iconImageSize:[40,40],iconImageOffset:[-20,-40]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("rulerControl"),e.geoObjects.add(t)})),document.querySelector(".button_form").onclick=function(){console.log("lsfdfs"),document.querySelector(".input").value},function(){const e=document.querySelectorAll(".card");for(let s=0;s<e.length;s++){const n=e[s];n.addEventListener("mousemove",t),n.addEventListener("mouseout",o)}function t(e){const t=this.querySelector(".card-item"),o=t.offsetHeight/2,s=t.offsetWidth/2;t.style.transform="rotateX("+-(e.offsetY-o)/8+"deg) rotateY("+(e.offsetX-s)/5+"deg)"}function o(e){this.querySelector(".card-item").style.transform="rotate(0)"}}(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:100,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),function(){const e=document.querySelector(".carousel");firstImg=e.querySelectorAll("img")[0],arrowIcons=document.querySelectorAll(".wrapper i");let t,o,s,n=!1,r=!1;const l=()=>{let t=e.scrollWidth-e.clientWidth;arrowIcons[0].style.display=0==e.scrollLeft?"none":"block",arrowIcons[1].style.display=e.scrollLeft==t?"none":"block"};arrowIcons.forEach((t=>{t.addEventListener("click",(()=>{let o=firstImg.clientWidth+14;e.scrollLeft+="left"==t.id?-o:o,setTimeout((()=>l()),60)}))}));const c=s=>{n=!0,t=s.pageX||s.touches[0].pageX,o=e.scrollLeft},a=c=>{n&&(c.preventDefault(),r=!0,e.classList.add("dragging"),s=(c.pageX||c.touches[0].pageX)-t,e.scrollLeft=o-s,l())},i=()=>{n=!1,e.classList.remove("dragging"),r&&(r=!1,(()=>{if(e.scrollLeft==e.scrollWidth-e.clientWidth)return;s=Math.ads(s);let t=firstImg.clientWidth+14,n=t-s;if(e.scrollLeft>o)return e.scrollLeft+=s>t/3?n:-s;e.scrollLeft-=s>t/3?n:-s})())};e.addEventListener("mousedown",c),e.addEventListener("touchstart",c),e.addEventListener("mousemove",a),e.addEventListener("touchmove",a),e.addEventListener("mouseup",i),e.addEventListener("mouseleave",i),e.addEventListener("touchend",i)}();