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
        const responseData = CommonApi.getInstance().getProductMstList();
        this.setSizeSelectOptions(responseData);
        console.log(responseData);
    }
  
    // getProductPdtId(){
    //    // const responseData = CommonApi.getInstance().getProductMstList();
    //     console.log(responseData.pdtSizes)
        

    // }

    setSizeSelectOptions(responseData) {
        const pdtDtlSizeSelect = document.querySelector(".size-select");
       
        pdtDtlSizeSelect.innerHTML = "";
        responseData.pdtSizes.forEach(value => {
            pdtDtlSizeSelect.innerHTML += `
                <option value="${value.pdtDtlId}">${value.sizeName}</option>
            `;
        })

    }

}
  
window.onload = () => {
    new Option();
}