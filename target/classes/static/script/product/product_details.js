<<<<<<< HEAD
const size = document.querySelector(".size-select");
const plus_btns = document.querySelectorAll(".plus");
const minus_btns = document.querySelectorAll(".minus");
const counts = document.querySelectorAll(".pdt-tbody input"); //수량 값

let price = document.querySelector(".price-value").innerHTML;
price = Number(price);

const XL = document.querySelector(".XL")
const L = document.querySelector(".L")
const M = document.querySelector(".M")
const S = document.querySelector(".S")
const XS = document.querySelector(".XS")
let pdtPrice = document.querySelectorAll(".pdt-price-td");

for(let i = 0 ; i< pdtPrice.length; i++){
    pdtPrice[i].innerHTML += `
        ₩${price}
    `
}

size.onchange = () => {
    let pdt_size = size.options[size.selectedIndex].value;
    console.log(pdt_size);

    // let check = [];

    if(pdt_size == 'XL'){
        XL.style.display = 'table-row';
    }
    else if(pdt_size == 'L'){
        L.style.display = 'table-row';
    }
    else if(pdt_size == 'M'){
        M.style.display = 'table-row';
    }
    else if(pdt_size == 'S'){
        S.style.display = 'table-row';
    }
    else if(pdt_size == 'XS'){
        XS.style.display = 'table-row';
    }
}
    

plus_btns[0].onclick = () => {
    counts[0].value++;

    pdtPrice[0].innerHTML = ``;
    pdtPrice[0].innerHTML += `
        ₩${price * counts[0].value}
    `;


}
minus_btns[0].onclick = () => {
    if(counts[0].value == 0){
        return 0;
    }else{
        counts[0].value--;
    }

    pdtPrice[0].innerHTML = ``;
    pdtPrice[0].innerHTML += `
        ₩${price * counts[0].value}
    `;
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

plus_btns[4].onclick = () => {
    counts[4].value++;

    pdtPrice[4].innerHTML = ``;
    pdtPrice[4].innerHTML += `
        ₩${price * counts[4].value}
    `;
}
minus_btns[4].onclick = () => {
    if(counts[4].value == 0){
        return 0;
    }else{
        counts[4].value--;
    }

    pdtPrice[4].innerHTML = ``;
    pdtPrice[4].innerHTML += `
        ₩${price * counts[4].value}
    `;
=======
const pName = document.querySelector("h2");

let prodList = new Array();

function sizeValue() {
    const allPrice = document.querySelector("#all-price");

    let product = {
        prodName : pName
        
    } 
    prodList.push(product);

    allPrice.innerHTML = "";

    allPrice.innerHTML += `
        <td>${product.prodName}</td>
        <td>    
        <input id="count-box" type="number" value="1" min="0">
        </td>
        <td></td>
        <td colspan="3"><hr></td>
    
    `
>>>>>>> KYJ
}