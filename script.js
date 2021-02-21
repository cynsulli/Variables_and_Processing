var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your bill?"));

var num2 = Number(.07);

var num3 = Number(.05);

var sum = (((num1 * num2) + num1) * num3) + ((num1 * num2) + num1);

containerEle.innerHTML = sum;