export function renderProducts(originalArray) {
    
  let html = "";
  originalArray.forEach((product) => {
    html += `
            <div class="product-card">
              <div class="prod-img-div">
                <img src="${product.productImage}" alt="${product.title}">
                <span class="rating-box">
                  <span class="rating">${product.rating}</span>
                  <span  class="star-icon"></span>
                  <span class="count">| ${product.noOfRatings}</span>
                </span>
              </div>
               
              <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-desc">${product.description}</div>
                <div>
                  <span class="price">Rs. ${product.discountPrice}</span>
                  <span class="original-price">Rs. ${product.originalPrice}</span>
                  <span class="discount">(${product.discountPercentage}% OFF)</span>
                </div>
                <div class="coupon-box">
                  <span class="price-label">Best Price</span>
                  <span class="price-value">₹649</span>
                  <span class="price-note">with coupon</span>
                </div>
              </div>
              
            </div>
          `;
  });

  document.getElementById("product-grid").innerHTML = html;
}