class CommonApi {
  static #instance = null;

  static getInstance() {
      if(this.#instance == null) {
          this.#instance = new CommonApi();
      }
      return this.#instance;
  }

 
  
  getProductMstList() {
      let responseData = null;
      const url = location.href;
      const pdtId = url.substring(url.lastIndexOf("/") + 1);

      $.ajax({
          async: false,
          type: "get",
          url: "/api/product/" + pdtId,
          dataType: "json",
          success: (response) => {
              responseData = response.data;
          },
          error: (error) => {
              console.log(error);
          }
      });
      return responseData;
  }

  // getProductSizeList(productId) {
  //     let responseData = null;

  //     $.ajax({
  //         async: false,
  //         type: "get",
  //         url: "/api/admin/option/products/size/" + productId,
  //         dataType: "json",
  //         success: (response) => {
  //             responseData = response.data;
  //         },
  //         error: (error) => {
  //             console.log(error);
  //         }
  //     });
  //     return responseData;
  // }
}

class Option {
  // static #instance = null;
  // static getInstance() {
  //     if(this.#instance == null) {
  //         this.#instance = new Option();
  //     }
  //     return this.#instance;
  // }

  constructor() {
      this.getProductPdtId();
  }

  getProductPdtId(){
      const responseData = CommonApi.getInstance().getProductMstList();
      this.setSizeSelectOptions(responseData);
      this.setProductPdtName(responseData)
      this.getProductPrice(responseData)
      console.log(responseData);

  }
  
  setSizeSelectOptions(responseData) {
      const pdtDtlSizeSelect = document.querySelector(".size-select");

      pdtDtlSizeSelect.innerHTML = "";
      responseData.pdtSizes.forEach(value => {
          pdtDtlSizeSelect.innerHTML += `
              <option value="${value.pdtDtlId}">${value.sizeName}</option>
          `;
      })

  }

  setProductPdtName(responseData) {
      const pdtDtlpdtName = document.querySelector(".pName");
      const pdtDtlPdtPrice = document.querySelector(".price-value");
      const tablePdtName = document.querySelectorAll(".product-name");
      const pdtPriceNum = document.querySelectorAll(".sum");
      const counts = document.querySelectorAll(".input1");
      const totalPrice = document.querySelector(".totalPrice");
      const plus_btns = document.querySelectorAll(".plus");
      const minus_btns = document.querySelectorAll(".minus");

      pdtDtlpdtName.innerHTML = "";
      pdtDtlpdtName.innerHTML += `
          ${responseData.pdtName}
      `;

      
      pdtDtlPdtPrice.innerHTML = "";
      pdtDtlPdtPrice.innerHTML += `
          ${responseData.pdtPrice}
      `;

  } 

  getProductPrice(responseData){
      var arr = [];
      const pdtDtlSizeSelect = document.querySelector(".size-select");
      const pdtSizeTable = document.querySelector(".selected-table");
      const pdtTableptb = document.querySelector(".pdt-tbody");
      pdtDtlSizeSelect.onchange = () => {
          const text = pdtDtlSizeSelect.options[pdtDtlSizeSelect.selectedIndex].text;
          const values = pdtDtlSizeSelect.options[pdtDtlSizeSelect.selectedIndex].value;
          if(!arr.includes(values)){
              console.log(responseData);
              pdtTableptb.innerHTML += `
              <tr>
                  <td>
                      <p><span class="product-name">${responseData.pdtName}</span><br>- <span class="product-size">${text}</span></p>
                  </td>
                  <td>
                      <input class="input1" type="text" size="1" value="1">
                      <button type="button" class="plus">+</button>
                      <button type="button" class="minus">-</button>   
                  </td>
              <td class="pdt-price-td">${responseData.pdtPrice}
              </td>
              </tr>
              `;
          }
          arr.push(pdtDtlSizeSelect.options[pdtDtlSizeSelect.selectedIndex].value);
          
     
      } 
  }

}

window.onload = () => {
  new Option();
}