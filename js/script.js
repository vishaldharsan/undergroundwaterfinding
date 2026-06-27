document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Loader
    ========================= */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1000);

    });

    /* =========================
       Header Shadow
    ========================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.classList.add("sticky");

        }

        else{

            header.classList.remove("sticky");

        }

    });

    /* =========================
       Smooth Scroll
    ========================= */

    document.querySelectorAll('nav a').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* =========================
       Counter Animation
    ========================= */

    const counters=document.querySelectorAll(".counter h2");

    let counted=false;

    function runCounter(){

        const section=document.querySelector(".trust");

        if(!section) return;

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-100 && !counted){

            counted=true;

            counters.forEach(counter=>{

                const finalNumber=parseInt(counter.innerText.replace(/\D/g,""));

                let count=0;

                const timer=setInterval(()=>{

                    count++;

                    if(count>=finalNumber){

                        clearInterval(timer);

                        counter.innerHTML=counter.innerHTML.includes("+")
                        ? finalNumber+"+"
                        : finalNumber;

                    }

                    else{

                        counter.innerHTML=counter.innerHTML.includes("+")
                        ? count+"+"
                        : count;

                    }

                },30);

            });

        }

    }

    window.addEventListener("scroll",runCounter);

    runCounter();

    /* =========================
       Reveal Animation
    ========================= */

    const reveals=document.querySelectorAll(".card,.counter,.about,.area-list div");

    function reveal(){

        reveals.forEach(item=>{

            const top=item.getBoundingClientRect().top;

            if(top<window.innerHeight-120){

                item.style.opacity="1";

                item.style.transform="translateY(0)";

            }

        });

    }

    reveals.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(60px)";

        item.style.transition="1s";

    });

    window.addEventListener("scroll",reveal);

    reveal();

    /* =========================
       Tamil Translation
    ========================= */

    const translateBtn=document.getElementById("translateBtn");

    let tamil=false;

    translateBtn.addEventListener("click",()=>{

        tamil=!tamil;

        if(tamil){

            document.querySelector(".hero-content h1").innerHTML="பாரம்பரிய நிலத்தடி நீர் கண்டறிதல்";

            document.querySelector(".hero-content h2").innerHTML="LSVS நிலத்தடி நீர் கண்டறிதல்";

            document.querySelector(".hero-content p").innerHTML="20+ ஆண்டுகள் அனுபவம் • தேங்காய் மூலம் தண்ணீர் கண்டறிதல் • வாஸ்து ஆலோசனை";

            translateBtn.innerHTML="English";

        }

        else{

            document.querySelector(".hero-content h1").innerHTML="Traditional Underground Water Finding";

            document.querySelector(".hero-content h2").innerHTML="LSVS Underground Water Finding";

            document.querySelector(".hero-content p").innerHTML="20+ Years of Experience in Traditional Coconut Water Finding & Vasthu Consultation";

            translateBtn.innerHTML="தமிழ்";

        }

    });

    /* =========================
       Active Menu
    ========================= */

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=section.offsetTop-150;

            if(pageYOffset>=sectionTop){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")=="#"+current){

                link.classList.add("active");

            }

        });

    });

    /* =========================
       Back To Top
    ========================= */

    const topButton=document.createElement("button");

    topButton.innerHTML="↑";

    topButton.className="topButton";

    document.body.appendChild(topButton);

    topButton.style.position="fixed";
    topButton.style.bottom="25px";
    topButton.style.left="25px";
    topButton.style.width="55px";
    topButton.style.height="55px";
    topButton.style.borderRadius="50%";
    topButton.style.border="none";
    topButton.style.background="#0d7c42";
    topButton.style.color="#fff";
    topButton.style.fontSize="24px";
    topButton.style.cursor="pointer";
    topButton.style.display="none";
    topButton.style.zIndex="9999";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.display="block";

        }

        else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });
    /* =========================
   Mobile Menu
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close the menu when a navigation link is clicked
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

}

});
