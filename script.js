function updateClock(){
    const timeDisplay=document.getElementById('time');
    const dateDisplay=document.getElementById('date');
    const now= new Date();
    const hours=String(now.getHours()).padStart(2,'0');
    const min=String(now.getMinutes()).padStart(2,'0');
    const sce=String(now.getSeconds()).padStart(2,'0');
    const date=String(now.getDate());
    let month=String(now.getMonth());
    let num=parseInt(month);
    num+=1;
    const year=String(now.getFullYear());
    timeDisplay.textContent= `${hours} : ${min} : ${sce} `;
    dateDisplay.textContent= `${date}/ ${num}/ ${year} `;
}
setInterval(updateClock,1000);//update clock every seconds
updateClock();//