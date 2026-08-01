const loading=document.getElementById("loading");
const main=document.getElementById("main");
const start=document.getElementById("startButton");
const openBtn=document.getElementById("openEnvelope");
const flap=document.querySelector(".flap");
const musicBtn=document.getElementById("musicButton");
const song=document.getElementById("song");
const surpriseBtn=document.getElementById("surpriseButton");
const surprise=document.getElementById("surprise");

start.onclick=()=>{
 loading.style.display="none";
 main.classList.remove("hidden");
 createHearts();
};

openBtn.onclick=()=>{
 flap.style.transform="rotateX(180deg)";
 openBtn.innerText="Opened ❤️";
};

let playing=false;
musicBtn.onclick=()=>{
 if(!playing){
   song.play();
   musicBtn.innerText="Pause ❤️";
 }else{
   song.pause();
   musicBtn.innerText="Play HER ❤️";
 }
 playing=!playing;
};

surpriseBtn.onclick=()=>{
 surprise.classList.add("show");
};

function createHearts(){
 setInterval(()=>{
   const h=document.createElement("div");
   h.innerHTML="❤️";
   h.style.position="fixed";
   h.style.left=Math.random()*100+"vw";
   h.style.top="100vh";
   h.style.fontSize=(18+Math.random()*20)+"px";
   h.style.pointerEvents="none";
   h.style.transition="transform 6s linear, opacity 6s";
   document.body.appendChild(h);
   requestAnimationFrame(()=>{
      h.style.transform="translateY(-120vh)";
      h.style.opacity="0";
   });
   setTimeout(()=>h.remove(),6000);
 },400);
}
