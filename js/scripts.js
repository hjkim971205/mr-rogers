function beep(inputNumber) {
    if (inputNumber < 1) {
        const paragraph = document.createElement("p");
        paragraph.append("Please enter a number > 0");
        document.body.append(paragraph);
    } else {
        let numberArray = [];
        for (let i = 0; i <= inputNumber; i++) {
            if (i.toString().indexOf("3") !== -1) {
                numberArray.push(" Won't you be my neighbor?");
            } else if (i.toString().indexOf("2") !== -1) {
                numberArray.push(" Boop!");
            } else if (i.toString().indexOf("1") !== -1) {
                numberArray.push(" Beep!");
            } else {
                numberArray.push(i);
            }
        }

        return numberArray;
    }
}

//Interface Logic 
window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        let input = document.getElementById("input").value;
        let numberArray = beep(input);
        document.getElementById("result").innerText = numberArray,join(" ");
    }
}
