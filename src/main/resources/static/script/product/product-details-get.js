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

    
        for(let i = 0; i < tablePdtName.length; i++) {
            tablePdtName[i].innerHTML = "";
            tablePdtName[i].innerHTML += `
                ${responseData.pdtName}
            `;
        }

        for(let i = 0; i < pdtPriceNum.length; i++) {
            pdtPriceNum[i].innerHTML = "";
            pdtPriceNum[i].innerHTML += `
                ${responseData.pdtPrice}
            `;
        }

        for(let i = 0; i < pdtPriceNum.length; i++) {
            totalPrice.innerHTML = "";
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[i].value}
            `;
        }totalPrice.innerHTML = `${responseData.pdtPrice}`;

        plus_btns[0].onclick = () => {
           

            counts[0].value++;
            
            pdtPrice[0].innerHTML = ``;
            pdtPrice[0].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[0].value}</span>
            `;

            for(let i=0; i<pdtPriceNum.length; i++){
                let totalSum = 0;

                totalSum += pdtPriceNum[i].value;
                Number(totalSum);
                totalPrice.innerHTML = ``;
                totalPrice.innerHTML += `
                    ${totalSum}
                `;

            }

            // totalPrice.innerHTML = ``;
            // totalPrice.innerHTML += `
            //     ${responseData.pdtPrice * counts[0].value}
            // `;
        }

        minus_btns[0].onclick = () => {

            if(counts[0].value == 0){
                return 0;
            }else{
                counts[0].value--;
            }
        
            pdtPrice[0].innerHTML = ``;
            pdtPrice[0].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[0].value}</span>
            `;
        
            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[0].value}
            `;
        }

        plus_btns[1].onclick = () => {
            counts[1].value++;
        
            pdtPrice[1].innerHTML = ``;
            pdtPrice[1].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[1].value}</span>
            `;

            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[1].value}
            `;
        }
        
        minus_btns[1].onclick = () => {

            if(counts[1].value == 0){
                return 0;
            }else{
                counts[1].value--;
            }
        
            pdtPrice[1].innerHTML = ``;
            pdtPrice[1].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[1].value}</span>
            `;
        
            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[1].value}
            `;
        }

        plus_btns[2].onclick = () => {
            counts[2].value++;
        
            
            pdtPrice[2].innerHTML = ``;
            pdtPrice[2].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[2].value}</span>
            `;

            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[2].value}
            `;
        }
        
        minus_btns[2].onclick = () => {

            if(counts[2].value == 0){
                return 0;
            }else{
                counts[2].value--;
            }
        
            pdtPrice[2].innerHTML = ``;
            pdtPrice[2].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[2].value}</span>
            `;
        
            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[2].value}
            `;
        }
        plus_btns[3].onclick = () => {
            counts[3].value++;
        
            
            pdtPrice[3].innerHTML = ``;
            pdtPrice[3].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[3].value}</span>
            `;

            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[3].value}
            `;
        }
        
        minus_btns[3].onclick = () => {

            if(counts[3].value == 0){
                return 0;
            }else{
                counts[3].value--;
            }
        
            pdtPrice[3].innerHTML = ``;
            pdtPrice[3].innerHTML += `
            ₩<span class="sum">${responseData.pdtPrice * counts[3].value}</span>
            `;
        
            totalPrice.innerHTML = ``;
            totalPrice.innerHTML += `
                ${responseData.pdtPrice * counts[3].value}
            `;
        }

    }   


}
  
window.onload = () => {
    new Option();
}