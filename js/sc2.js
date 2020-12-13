let isBold = true;

function task2() {
    let a = document.getElementById("textStrong");
    isBold = !isBold;
    if (!isBold) {
        a.classList.add("bold");

    } else {
        a.classList.remove("bold");
    }
}

function f3() {
    let text = document.querySelector("#answer3");
    let dateTime = (getSecondsToTomorrow() + 3600);
    text.innerHTML = " До конца дня осталось " + dateTime + " секунд <br\/>" + " Или " + Math.round(dateTime / 60) + " минут";
}
setInterval(() => {
    f3();
}, 1000);

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
}

function task4() {
    let a = document.querySelector("#task4").value;
    let arr = a.split("-");
    let year = parseInt(arr[0]);
    let week = parseInt(arr[1]);
    let day = parseInt(arr[2]);

    if ((new Date().getFullYear() - year) < 0) {
        document.getElementById("answer4").style.color = "red";
        document.getElementById("answer4").style.background = "white";
        document.getElementById("answer4").innerHTML = "Возвраст не может быть отрицательным!";
    } else if (/^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/.test(a)) {
        let strYear = "";
        if ((new Date().getFullYear() - year) % 10 == 1) {
            strYear = " год";
        } else if ((new Date().getFullYear() - year) % 10 > 1 && (new Date().getFullYear() - year) % 10 < 5) {
            strYear = " года";
        } else {
            strYear = " лет";
        }

        let date2 = document.querySelector('#task4').value;
        let birthday = date2.split("-");
        let y = birthday[0];
        let m = birthday[1];
        let d = birthday[3];

        let today = new Date();
        today.setHours(0, 0, 0, 0);

        let nextDate = new Date([today.getFullYear(), m, d].join(','));
        if (nextDate < today) nextDate.setFullYear(today.getFullYear() + 1);
        let msPerDay = 24 * 60 * 60 * 1000;
        daysLeft = Math.round((nextDate.getTime() - today.getTime()) / msPerDay);
        let input = document.getElementById('task4').value;
        let date = new Date();
        let dateBirthday = Date.parse(input);
        let nowDate = date.getTime();
        let diff = Math.floor((nowDate - dateBirthday) / (1000 * 60 * 60 * 24));
        document.getElementById("answer4").style.color = "green";
        document.getElementById("answer4").style.background = "white";
        document.getElementById("answer4").innerHTML = "Вам " + (new Date().getFullYear() - year) + strYear + "</br>" + "За всю жизнь вы прожили " + diff + ' дней' + "</br>" + "До вашего дня рождения осталось " + (daysLeft + 20) + " дней ";


        console.log(diff)
    } else {
        document.getElementById("answer4").style.color = "red";
        document.getElementById("answer4").style.background = "white";
        document.getElementById("answer4").innerHTML = "Неверный формат!";
    }
    let nowYear = new Date().getFullYear();
}
let isStart = true;
let val=" ";
function startTimer() {
    let sec = 0;
    let min = 0;
    let hours = 0;
    let s1 = 0;
    let s = 0;
    let m = 0;
    let h = 0;
    document.querySelector('.t1').innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Stop";
    if (isStart) {
        t = setInterval(function () {
            sec++;
            s1++;
            if (sec < 10) s = '0' + sec; else s = sec;
            if (min < 10) m = '0' + min; else m = min;
            if (min < 10) h = '0' + hours; else h = hours;
            if (sec > 58) {
                min++; sec = -1;
            }
            if (s1 > 3598) {
                min = 0;
                hours++;
                s1 = 0;
            }
            document.querySelector('.t1').innerHTML = [
                h,
                m,
                s
            ].join(':');
            val = [h,m,s].join(':');
        }, 1000);
        isStart = false;
    } else {
        document.getElementById("start").innerHTML = "Restart";
        document.querySelector('.t1').innerHTML = val;
        clearInterval(t);
        isStart = true;
    }

}
