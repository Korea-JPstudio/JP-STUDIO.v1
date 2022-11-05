const pName = document.querySelector(".pName").innerHTML;
const productName = document.querySelectorAll(".product-name");
const size = document.querySelector(".size-select");
const plus_btns = document.querySelectorAll(".plus");
const minus_btns = document.querySelectorAll(".minus");
const counts = document.querySelectorAll(".pdt-tbody input"); //수량 값

let totalPrice = document.querySelector(".totalPrice");
let totalPriceValue = document.querySelector(".totalPrice").innerHTML;
Number(totalPriceValue);
console.log(totalPriceValue);

totalPrice = totalPriceValue;

let price = document.querySelector(".price-value").innerHTML;
price = Number(price);



const XL = document.querySelector(".XL")
const L = document.querySelector(".L")
const M = document.querySelector(".M")
const S = document.querySelector(".S")
const XS = document.querySelector(".XS")
let pdtPrice = document.querySelectorAll(".pdt-price-td");


for(let i = 0; i < productName.length; i++) {
    productName[i].innerHTML = pName;
}

for(let i = 0 ; i< pdtPrice.length; i++) {
    pdtPrice[i].innerHTML += `
        ₩<span class="sum">${price}</span>
    `
}

size.onchange = () => {
    let pdt_size = size.options[size.selectedIndex].value;

    console.log(pdt_size);

    if(pdt_size == '4'){
        XL.style.display = 'table-row';
    }
    else if(pdt_size == '3'){
        L.style.display = 'table-row';
    }
    else if(pdt_size == '2'){
        M.style.display = 'table-row';
    }
    else if(pdt_size == '1'){
        S.style.display = 'table-row';
    }

    
}


plus_btns[0].onclick = () => {
    let sum = 0;
    Number(sum);

    counts[0].value++;

    sum = price * counts[0].value;

    console.log(sum);

    pdtPrice[0].innerHTML = ``;
    pdtPrice[0].innerHTML += `
        ₩${sum}
    `;

    totalPrice.innerHTML = ``;
    totalPrice.innerHTML = `${sum}`;
}
minus_btns[0].onclick = () => {

    if(counts[0].value == 0){
        return 0;
    }else{
        counts[0].value--;
    }
    sum = price * counts[0].value;

    pdtPrice[0].innerHTML = ``;
    pdtPrice[0].innerHTML += `
        ₩${sum}
    `;

    
    totalPrice.innerHTML = `${sum}`;
}

plus_btns[1].onclick = () => {
    counts[1].value++;

    pdtPrice[1].innerHTML = ``;
    pdtPrice[1].innerHTML += `
        ₩${price * counts[1].value}
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
        ₩${price * counts[1].value}
    `;
}

plus_btns[2].onclick = () => {
    counts[2].value++;

    pdtPrice[2].innerHTML = ``;
    pdtPrice[2].innerHTML += `
        ₩${price * counts[2].value}
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
        ₩${price * counts[2].value}
    `;
}

plus_btns[3].onclick = () => {
    counts[3].value++;

    pdtPrice[3].innerHTML = ``;
    pdtPrice[3].innerHTML += `
        ₩${price * counts[3].value}
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
        ₩${price * counts[3].value}
    `;
}


for(let i = 0; i<pdtPrice.length; i++){
    sum += Number(pdtPrice[i].innerHTML);
}

totalPrice.innerHTML = ``;
totalPrice.innerHTML += `
    ${sum}
`;


class ProductApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductApi();
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
            url: "/api/product/" + pdtId,
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


class ProductDetail {

    constructor() {
        const responseData = ProductApi.getInstance().getProductData();
	    this.loadProductDetail(responseData);
    }

    loadProductDetail(responseData) {
        document.querySelector(".pName").textContent = responseData.pdtName;
        document.querySelector(".price-value").textContent = "\\" + responseData.pdtPrice;
        
    }
}

window.onload = () => {
    new ProductDetail();
}