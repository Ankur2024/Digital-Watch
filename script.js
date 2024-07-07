const currentTime = () => {
    let curTime =  new Date();
    document.getElementById('clock').innerText = curTime.toLocaleTimeString();

};
currentTime();
setInterval(currentTime, 1000);