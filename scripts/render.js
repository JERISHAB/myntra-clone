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
                  <span class="count"><span class="count-partition">|</span> ${product.noOfRatings}</span>
                </span>
              </div>
               
              <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-desc">${product.description}</div>
                <div class="price-detials" >
                  <span class="price"><span class="rs">Rs. </span><span class="price-value-discount"><svg width="17" height="17" viewBox="0 0 24 24" class="rupees" fill="#282C3F"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0"></path><path fill="#282C3F" d="M7 6.215h4.962v2.43H7.505L7.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H7v1.215z"></path></g></svg></span> ${product.discountPrice}</span>
                  <span class="original-price"><span class="price-value-originalPrice">₹</span><span class="rs">Rs. </span> ${product.originalPrice}</span>
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