function task5() {
    var newW = window.open("", "iojio", "width=400,height=200");
    newW.document.write("Четные числа: " + "<br \/>");
    for (let i = 1; i < 100; i++) {
        if (i % 2 == 0)
            newW.document.write(i + "<br \/>");

    }
    newW.document.write("<br \/>" + "Нечетные числа: " + "<br \/>");
    for (let i = 1; i < 100; i++) {
        if (i % 2 == 1)
            newW.document.write(i + "<br \/>");
    }
}

function task6() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    alert("Сумма чисел от 0 до 100: " + sum);
}

function task7() {
    document.getElementById("answer7").style.padding = "5px";
    document.getElementById("answer7").style.color = "green";
    document.getElementById("answer7").style.background = "white";
    let num = document.getElementById("input7").value;
    let factorial = 1;
    if (num == '0') {
        document.getElementById("answer7").style.color = 'red';
        document.getElementById("answer7").innerHTML = "Факториал нуля равен 0!";
    } else if (num == '') {
        document.getElementById("answer7").style.color = 'red';
        document.getElementById("answer7").innerHTML = "Поле не может быть пустым!";
    }else{
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        document.getElementById("answer7").innerHTML = factorial;
    }
    
}