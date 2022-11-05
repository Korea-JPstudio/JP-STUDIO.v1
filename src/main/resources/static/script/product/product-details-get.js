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
  
    getProductSizeList(productId) {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/size/" + productId,
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
}

class Option {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new Option();
        }
        return this.#instance;
    }
  
    constructor() {
        this.getProductPdtId();
        this.getProductPdtName();
    }
  
    getProductPdtId(){
        const responseData = CommonApi.getInstance().getProductMstList();

        this.setSizeSelectOptions(responseData.pdtId);

        console.log(responseData.pdtId);
    }
    
    setSizeSelectOptions(productId) {
        const pdtDtlSizeSelect = document.querySelector(".size-select");

        pdtDtlSizeSelect.innerHTML = "";
        CommonApi.getInstance().getProductSizeList(productId).forEach(size => {
            pdtDtlSizeSelect.innerHTML += `
                <option value="${size.sizeId}">${size.sizeName}</option>
            `;
        })

    }

    getProductPdtName() {
        const responseData = CommonApi.getInstance().getProductMstList();

        this.setProductPdtInfo(responseData.pdtName, responseData.pdtPrice);

        console.log(responseData.pdtName);
        console.log(responseData.pdtPrice);

    }   

    setProductPdtInfo(pdtName, pdtPrice) {
        const pdtDtlpdtName = document.querySelector(".pName");
        const pdtDtlPdtPrice = document.querySelector(".price-value");

        pdtDtlpdtName.innerHTML = "";
        pdtDtlpdtName.innerHTML += `
            ${pdtName}
        `;
        pdtDtlPdtPrice.innerHTML = "";
        pdtDtlPdtPrice.innerHTML += `
            ${pdtPrice}
        `;
        
    }


}
  
window.onload = () => {
    Option.getInstance();
}