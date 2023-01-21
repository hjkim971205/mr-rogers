function beep(inputNumber) {
    if (inputNumber < 1) {
        const paragraph = document.createElement("p");
        paragraph.append("Please enter integer number > 0");
        document.body.append(paragraph);
    } else {
        let numberArray = [];
        for (let i = 0; i <= inputNumber; i++) {
            if(i.toString().indexOf("1") !== -1){
                numberArray.push("Beep!");
            } else {
                numberArray.push(i);
            }
        }

        document.getElementById("output").innerText = numberArray;
    }
}

//Interface Logic 
window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        let input = document.getElementById("input").value;
        let numberArray = beep(input);
        document.getElementById("output").innerText = numberArray;
    }
}
