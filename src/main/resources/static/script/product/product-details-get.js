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

        pdtDtlpdtName.innerHTML = "";
        pdtDtlpdtName.innerHTML += `
        ${responseData.pdtName}
        `;

        
        pdtDtlPdtPrice.innerHTML = "";
        pdtDtlPdtPrice.innerHTML += `
        ${responseData.pdtPrice}
        `;

    
        for(let i = 0; i < tablePdtName.length; i++){
            tablePdtName[i].innerHTML = "";
            tablePdtName[i].innerHTML += `
                ${responseData.pdtName}
            `;
        }

        for(let i = 0; i < pdtPriceNum.length; i++){
            pdtPriceNum[i].innerHTML = "";
            pdtPriceNum[i].innerHTML += `
                ${responseData.pdtPrice}
            `;
        }

}   



  

 




        
        
        
    // }


}
  
window.onload = () => {
    new Option();
}