const days = document.querySelectorAll('days');
const hours  = document.querySelectorAll('hours');
const minutes  = document.querySelectorAll('minutes');
const seconds  = document.querySelectorAll('seconds');

const newYerarTime = new Date(`April 22 ${ currentYear + 1} 00:00:00`);
function updateCoundtdowntime(){
    const currenTime = new Date();
    const diff = newYerarTime - currentTime;
    const d =Math.floor(diff / 1000/ 60 / 60 / 24) ;
    const h = Math.floor(diff / 1000/ 60 / 60 % 24 ) ;
    const m = Math.floor(diff / 1000/ 60  ) % 60 ;
    const s = Math.floor(diff / 1000) % 60 ;

 days.innerHTML = d;
 hours.innerHTML = h < 10 ? '0' + h : h;
 minutes.innerHTML = m < 10 ? '0' + m : m;
 seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updateCountdown, 1000);