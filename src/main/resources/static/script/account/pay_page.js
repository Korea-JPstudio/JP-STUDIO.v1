const registerButton = document.querySelector(".address-button");

registerButton.onclick = () => {
    const postcodeInput = document.querySelector(".postcode").value;
    const addressInput = document.querySelector(".address").value;
    const detailAddressInput = document.querySelector(".detailAddress").value;

    $.ajax({
        async: false,
        type : "post",
        url : "/api/account/address",
        dataType : "json",
        success : response => {
           alert("주소저장에 성공하였습니다.")
        },
        error : error => {
            console.log(error);
        }


    });

}



class ImportApi {
    #IMP = null;

    constructor () {
        this.#IMP = window.IMP;
        this.#IMP.init("imp14519436");
        this.addPaymentEvent();

    }

    addPaymentEvent() {
        document.querySelector(".payment-button").onclick = () => {
            this.requestPay();
            
        }
    }

    requestPay(){
        //const pdtName = document.querySelector(".product-name").textContent;
        //const pdtPrice = document.querySelector(".product-price").textContent;
        const name = document.querySelector("#customer").value;
        const zoneCode = document.querySelector(".postcode").value;
        const addressAll = document.querySelector(".address").value;
        const addressDetail = document.querySelector(".detailAddress").value;
        const address = addressAll + " " + addressDetail;
        const phone = document.querySelector(".phone-number").value;

             // IMP.request_pay(param, callback) 결제창 호출
             IMP.request_pay({ // param
                pg: "kakaopay",
                pay_method: "card",
                merchant_uid: "PRODUCT-" + new Date().getTime(),
                //name: pdtName,
                //amount: pdtPrice,
                buyer_name: name,
                buyer_tel: phone,
                buyer_addr: address,
                buyer_postcode: zoneCode
            }, function (rsp) { // callback
                if (rsp.success) {
    
                } else {
    
                }
    
            });
   
        }

    }   

window.onload = () => {
    new ImportApi();

}

