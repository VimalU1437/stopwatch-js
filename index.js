const display = document.querySelector(".display");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const cast = document.getElementById("cast");
const castDivision = document.querySelector(".cast-division");


let HH = 0, MM = 0,SS=0,MS=0;

let intervelID = null;

let count = 1;


start.onclick = ()=>{ 
    // console.log(intervelID);
    if(!intervelID){
        intervelID = setInterval(()=>{
            if(MM === 60){
                HH++;
                MM = 0;
            }
            if(SS === 60){
                MM++;
                SS = 0;
            }
            if(MS === 1000){
                SS++;
                MS = 0;
            }
            MS += 10;
            display.textContent = `${HH < 10? "0"+HH : HH} : ${MM < 10 ? "0"+MM:MM} : ${SS < 10? "0"+SS : SS} : ${MS < 10 ? "00"+MS: MS < 100 ? "0"+MS : MS}`;
        },10);
    }
}

pause.onclick = ()=>{
    if(intervelID){
        clearInterval(intervelID);
        intervelID = null;
    }
}

reset.onclick = ()=>{
    if(intervelID){
        clearInterval(intervelID);
        intervelID = null;
    }
    HH = 0;
    MM = 0;
    SS = 0;
    MS = 0;
    display.textContent = "00 : 00 : 00 : 000";
    castDivision.innerHTML = "";
    count = 1;
}

cast.onclick = () =>{
    let p = document.createElement("p");
    p.className = "cast-item";
    p.textContent = `CAST ${count} : ` + `${HH < 10? "0"+HH : HH} : ${MM < 10 ? "0"+MM:MM} : ${SS < 10? "0"+SS : SS} : ${MS < 10 ? "00"+MS: MS < 100 ? "0"+MS : MS}` ;
    count++;
    castDivision.appendChild(p);
}