/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = ["♥", "♠", "♣", "♦"];
  let indexNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(indexNumbers);

  let indexpalos = palos[Math.floor(Math.random() * palos.length)];
  document.querySelector(".top").innerHTML = indexpalos;
  document.querySelector(".bottom").innerHTML = indexpalos;
  document.querySelector(".number").innerHTML = indexNumbers;
  if (indexpalos == "♥" || indexpalos == "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }
};
