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
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/mst",
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
            url: "/api/admin/option/products/size/" + sizeId,
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
        this.setSizeSelectOptions();
    }
  
    setSizeSelectOptions() {
        const pdtDtlSizeSelect = document.querySelector(".size-select");
  
        pdtDtlSizeSelect.innerHTML = "";
        CommonApi.getInstance().getProductSizeList().forEach(size => {
            pdtDtlSizeSelect.innerHTML += `
                <option value="${size.sizeId}">${size.sizeName}</option>
            `;
        })

    }

}
  
window.onload = () => {
    Option.getInstance();
}