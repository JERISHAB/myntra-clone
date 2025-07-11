import { sortProducts } from "./filters.js";
import { renderProducts } from "./render.js";
import { applyFilters } from "./utils.js";
let currentSortType = null;
let currentFilteredArray = [];


const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const fetchData = await response.json();
    let originalArray = fetchData.products;
    currentFilteredArray = [...originalArray];
    setupSortEvents();
    renderProducts(currentFilteredArray);

    const checkbox = document.querySelectorAll("input[type=checkbox]")
    checkbox.forEach((cb) => {
      cb.addEventListener("change", () =>
        applyFilters(originalArray, updateFilteredAndRender)
      );
    })



  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

//sorting function

function setupSortEvents() {

  const sortOptions = document.querySelectorAll(".sort-option");
  const sortContainer = document.querySelector(".sort-right");
  const displayText = document.querySelector(".sort-right span strong");
  const sortDropdown = document.querySelector(".sortby-dropdown");
  sortContainer.addEventListener("click", () => {
    sortDropdown.style.display =
      sortDropdown.style.display === "flex" ? "none" : "flex";

    sortOptions.forEach((option) => {
      option.addEventListener("click", () => {
        sortOptions.forEach((o) => o.classList.remove("active"));
        option.classList.add("active");
  
        currentSortType = option.getAttribute("data-sort");
  
        renderAndSort(currentFilteredArray);
        displayText.innerHTML = currentSortType
      });
    });
  })
 
}

// rendering after sort
function renderAndSort(array) {
  const sortedArray = currentSortType
    ? sortProducts(array, currentSortType)
    : array;
  
  renderProducts(sortedArray)

}

function updateFilteredAndRender(filteredArray) {
  currentFilteredArray = filteredArray;
  renderAndSort(currentFilteredArray);
}


fetchData();



// slider funtions

const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const track = document.getElementById("slider-track");

let min = parseInt(minRange.value);
let max = parseInt(maxRange.value);

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
