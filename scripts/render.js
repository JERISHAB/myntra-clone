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
                  <span class="price-value"> ₹649</span>
                  <span class="price-note">with coupon</span>
                </div>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#3E4152"><path d="M8.1703,4.473425 C6.9537,4.473425 5.8134,4.946625 4.95975,5.805525 C4.10435,6.666175 3.63325,7.815575 3.63325,9.042675 C3.63325,10.269775 4.10435,11.419525 4.95975,12.280175 L12,19.362425 L19.0406,12.279825 C19.89565,11.419525 20.36675,10.270125 20.36675,9.042675 C20.36675,7.815575 19.89565,6.665825 19.0406,5.805875 C19.0406,5.805875 19.0406,5.805525 19.04025,5.805525 C18.1866,4.946625 17.0463,4.473425 15.8297,4.473425 C14.6138,4.473425 13.4742,4.946275 12.62055,5.804475 C12.29225,6.134525 11.70845,6.134875 11.3798,5.804475 C10.5258,4.946275 9.3862,4.473425 8.1703,4.473425 L8.1703,4.473425 Z M12.02835,21.276575 L11.972,21.276575 C11.6304,21.276575 11.2965,21.137625 11.05605,20.895075 L3.71865,13.513925 C2.53495,12.323225 1.88325,10.735275 1.88325,9.042675 C1.88325,7.350075 2.53495,5.762475 3.71865,4.571775 C4.9034,3.379675 6.48435,2.723425 8.1703,2.723425 C9.5759,2.723425 10.90905,3.179825 12,4.022625 C13.0913,3.179825 14.4241,2.723425 15.8297,2.723425 C17.516,2.723425 19.09695,3.379675 20.2817,4.572125 C21.46505,5.762475 22.11675,7.350075 22.11675,9.042675 C22.11675,10.735625 21.46505,12.323225 20.2817,13.513925 L12.94325,20.895775 C12.6993,21.141475 12.3745,21.276575 12.02835,21.276575 L12.02835,21.276575 Z" fill="#3E4152"></path></g></g></svg>
            </div>
          `;
  });

  document.getElementById("product-grid").innerHTML = html;
}