
async function fetchProducts() {
  try {
    const response = await fetch("./data.json");
    const products = await response.json();

    let html = "";
      products.products.forEach((product) => {
      html += `
          <div class="product-card">
            <div style="position: relative;">
              <img src="${product.productImage}" alt="${product.title}">
            </div>
            <div class="rating-box">
                <span class="rating">${product.rating}</span>
                <div  class="star-icon"></div>
                <span class="count">| ${product.noOfRatings}</span>
            </div>
            <div class="product-info">
              <div class="product-title">${product.title}</div>
              <div class="product-desc">${product.description}</div>
              <div>
                <span class="price">₹${product.discountPrice}</span>
                <span class="original-price">Rs ${product.originalPrice}</span>
                <span class="discount">(${product.discountPercentage}% OFF)</span>
              </div>
            </div>
            
          </div>
        `;
    });

    document.getElementById("product-grid").innerHTML = html;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
