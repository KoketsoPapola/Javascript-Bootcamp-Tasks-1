function addNumbers() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let result = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "Result: " + result;
}

function multiplyNumbers() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    let result = Number(a) * Number(b);

    document.getElementById("result2").innerText = "Result: " + result;
}

function checkEvenOdd() {
    let num = document.getElementById("num").value;

    if (num % 2 === 0) {
        document.getElementById("result3").innerText = "Even Number";
    } else {
        document.getElementById("result3").innerText = "Odd Number";
    }
}