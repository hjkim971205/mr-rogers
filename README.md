# _HTML Code Review_

#### By _**Hyung Jin Kim**_

#### https://github.com/hjkim971205/language-suggestion

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This browser application give the user an output that includes the numbers from 0 to what the user submitted. Every number that includes the numbers 1, 2, and 3 has output that gets changed to "Beep!" "Boop!" and "Won't you be my neighbor (user's name)?" respectively.

* p
* h
* div
* span
* label
* input
* button

## Setup/Installation Requirements

* Clone this repository to desktop
* Navigate to the top level of directory
* open index.html in your browser
* within the index.html fill in the fields to receive a suggestion at the end.

## Tests
Describe: beep()

Test: "It should return warning if number is empty." 
Code: if (inputNumber < 1) {
Expected Output: "Please enter a number > 0"

Test: "It should return "beep!" for any number containing the number 1 in the index." An index with 12 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, beep!, 13]

Test: "It should return "beep!" for any number containing the number 2 in the index." An index with 13 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, 13]

Test: "It should return "Won't you be my neighbor?" for any number containing the number 3 in the index." An index with 13 numbers were created.
Code: beep(13)
Expected Output: [0, beep!, 2, 3, 4, 5, 6, 7, 8, 9, beep!, beep!, boop!, Won't you be my neighbor?]

## Known Bugs

* N/A

## License

If there are any questions or bug reports please contact me via email at hyungjinkim1205@gmail.com

Copyright (c) 2023 Hyung Jin Kim(s)