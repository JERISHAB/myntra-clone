import { renderProducts } from "./render.js";

export function applyFilters(originalArray, updateFilteredAndRender) {
  console.log("entered apply filters");
  const filteredArray = [];
  const checked = document.querySelectorAll("input[type=checkbox]:checked");

  let filterMap = {};

  checked.forEach((cb) => {
    const name = cb.getAttribute("filterName");
    const value = cb.value;

    console.log("name: ", name);
    console.log("value: ", value);

    if (!filterMap[name]) {
      filterMap[name] = [];
    }

    filterMap[name].push(value);
    console.log(filterMap);
  });

  for (let i = 0; i < originalArray.length; i++) {
    const item = originalArray[i];
    let match = true;

    for (let key in filterMap) {
      const selectedValues = filterMap[key];
      console.log("selectedvalues: ", selectedValues);

      if (!selectedValues.includes(item[key])) {
        match = false;
        break;
      }
    }
    if (match) {
      filteredArray.push(item);
    }
  }

    renderProducts(filteredArray);
    updateFilteredAndRender(filteredArray);
}