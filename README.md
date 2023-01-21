Describe: beepboop()

Test: "It should return warning if number is empty." Code: const number = null; beepboop(number); Expected Output: "Please, enter a number > 0"

Test: "It should return "beep!" for any number containing the number 1 in the index." An index with 13 numbers were created.
Code: if(i.toString().indexOf("1") !== -1){
                numberArray.push("Beep!");
            }
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, beep!