package com.example.demo.controller;


import com.example.demo.dto.CheckoutRespDto;
import com.example.demo.securiry.PrincipalDetails;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

//모델과 뷰를 반환받기위해. 컨트롤러를 사용함.

@Controller
@RequiredArgsConstructor


public class AccountCtroller {

    private final ProductService productService;

    @GetMapping("/main")
    public String loadMain() {
        return "main";
    }

    @GetMapping("/account/login")
    public String login(Model model, @RequestParam @Nullable String email, @RequestParam @Nullable String error){
        model.addAttribute("email", email == null ? "" : email);
        model.addAttribute("error", error == null ? "" : error);
        return "/account/login";
    }

    @GetMapping("/account/signUp")
    public String signUp(){
        return "account/signUp";
    }

    @GetMapping("/account/order")
    public String loadPayment(Model model,
                              //@RequestParam int pdtDtlId,
                              @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        //CheckoutRespDto checkoutRespDto = productService.getCheckoutProduct(pdtDtlId);
       //model.addAttribute("data", checkoutRespDto);
        model.addAttribute("user", principalDetails.getUser());

        return "account/pay_page";
    }
}
