package com.example.demo.controller;

import com.example.demo.dto.CMRespDto;
import com.example.demo.dto.CheckoutRespDto;
import com.example.demo.securiry.PrincipalDetails;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class CollectionsController {

    private final ProductService productService;

    @GetMapping("/collections/{category}")
    public String loadCollections(@PathVariable String category) {

        return "product/product_collection";
    }

    @GetMapping("/product/{pdtId}")
    public String loadProductDetail(@PathVariable String pdtId) {
        return "product/product_detail";
    }

    @GetMapping("/checkout")
    public String loadPayment(Model model,
                              @RequestParam int pdtDtlId,
                              @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
        CheckoutRespDto checkoutRespDto = productService.getCheckoutProduct(pdtDtlId);
        model.addAttribute("data", checkoutRespDto);
        model.addAttribute("user", principalDetails.getUser());
        return "product/product_order";
    }


}
