class ProductDtlApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductDtlApi();
        }
        return this.#instance;
    }

    getProductData() {
        let responseData = null;
        const url = location.href;
        const pdtId = url.substring(url.lastIndexOf("/") + 1);

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/size/" + productId,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return responseData;

    }
}

class ProductDtlDetail {

    constructor() {
    const responseData = ProductDtlApi.getInstance().getProductData();
    this.loadProductSize(responseData);
    }

    loadProductSize(responseData) {
        const productSize = document.querySelector(".size-select");
        productSize.innerHTML = ``;
        console.log(responseData)

        responseData.forEach(value => {
            productSize.innerHTML += `<option value="${value.sizeId}">${value.sizeName}</option>`;
        });
    }
}
   
   
//   addSizeSelectEvent(responseData) {
//         const productColors = document.querySelector(".size-select");
//         productSize.onchange = () => {
//             this.loadProductSizes(responseData);
//         }
//     }

// }

window.onload = () => {
    new ProductDtlDetail();
}
