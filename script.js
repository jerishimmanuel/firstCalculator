

function resultfunction1() {
    var box1 = document.getElementById("num1");
    var box2 = document.getElementById("num2");
    var result = document.getElementById("result");

    var box1value = Number(box1.value);
    var box2value = Number(box2.value);
    var total = box1value + box2value;
    result.textContent = total;
}

function resultfunction2() {
    var box1 = document.getElementById("num1");
    var box2 = document.getElementById("num2");
    var result = document.getElementById("result");

    var box1value = Number(box1.value);
    var box2value = Number(box2.value);
    var total = box1value - box2value;
    result.textContent = total;
}

function resultfunction3() {
    var box1 = document.getElementById("num1");
    var box2 = document.getElementById("num2");
    var result = document.getElementById("result");

    var box1value = Number(box1.value);
    var box2value = Number(box2.value);
    var total = box1value * box2value;
    result.textContent = total;
}

function resultfunction4() {
    var box1 = document.getElementById("num1");
    var box2 = document.getElementById("num2");
    var result = document.getElementById("result");

    var box1value = Number(box1.value);
    var box2value = Number(box2.value);
    var total = box1value / box2value;
    result.textContent = total;
}

function clearFunction()
{
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
    document.getElementById("result").textContent = "0";
}