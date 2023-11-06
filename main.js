function getTime() {
    let t = 1000; 
    setInterval(showTime, t)
}

function showTime() {
    let date = new Date()
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if (heures < 10) {
        heures = '0' + heures;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (secondes < 10) {
        secondes = '0' + secondes;
    }

    // let time = heures + ':' + minutes + ':' + secondes;
    let time = '#' + heures + minutes + secondes;

    document.querySelector('#time').innerHTML = time;
    document.body.style.backgroundColor = time;
    getTime();
}
