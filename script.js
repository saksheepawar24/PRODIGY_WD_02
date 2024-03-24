const timedis=document.querySelector("#timedis");
const startbtn=document.querySelector("#btn-start");
const stopbtn=document.querySelector("#btn-stop");
const resetbtn=document.querySelector("#btn-reset");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;

let interval;
let hrs=0;
let mins=0;
let sec=0;

startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime;
        interval=setInterval(updateTime,75)
    }
});
stopbtn.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(interval);
    }
});
resetbtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(interval);
    startTime=0;
    elapsedTime=0;
    currentTime=0;
    hrs=0;
    mins=0;
    sec=0;
    timedis.textContent="00:00:00";
});

function updateTime(){
        elapsedTime=Date.now()-startTime;
        sec=Math.floor((elapsedTime/1000)%60);
        mins=Math.floor((elapsedTime/(1000*60)%60));
        hrs=Math.floor((elapsedTime/(1000*60*60)%60));

        timedis.textContent=`${hrs}:${mins}:${sec}`;
        sec=pad(sec);
        mins=pad(mins);
        hrs=pad(hrs);
        function pad(unit){
            return(("0")+unit).length>2?unit:"0"+unit;
        }
}