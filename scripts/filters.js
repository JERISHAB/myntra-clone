export function sortProducts(products, sortType) {
  let sorted = [...products];
  switch (sortType) {
    case "popularity":
      sorted.sort((a, b) => b.noOfRatings - a.noOfRatings);
      break;
    case "newest":
      sorted.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
      break;
    case "lowToHigh":
      sorted.sort((a, b) => a.discountPrice - b.discountPrice);
      break;
    case "highToLow":
      sorted.sort((a, b) => b.discountPrice - a.discountPrice);
      break;
    case "customerRating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      return sorted;
  }
  return sorted;
}
