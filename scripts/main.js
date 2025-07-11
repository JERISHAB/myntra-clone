import { renderProducts } from "./render.js";
import { applyFilters } from "./utils.js";


const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const fetchData = await response.json();
    let originalArray = fetchData.products;

    renderProducts(originalArray);

    const checkbox = document.querySelectorAll("input[type=checkbox]")
    checkbox.forEach((cb) => {
      cb.addEventListener("change", () => applyFilters(originalArray))
    })



  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

fetchData();



// slider funtions

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const track = document.getElementById("slider-track");

let min = parseInt(minRange.value);
let max = parseInt(maxRange.value);

if (max - min < 100) {
  if (minRange === document.activeElement) {
    minRange.value = max - 100;
    min = max - 100;
  } else {
    maxRange.value = min + 100;
    max = min + 100;
  }
}

const percentMin = (min / 10100) * 100;
const percentMax = (max / 10100) * 100;

track.style.background = `
  linear-gradient(to right,
   #afacad  0%,
    #afacad  ${percentMin}%,
    #e5395f ${percentMin}%,
    #e5395f ${percentMax}%,
   #afacad  ${percentMax}%,
   #afacad 100%)`;
