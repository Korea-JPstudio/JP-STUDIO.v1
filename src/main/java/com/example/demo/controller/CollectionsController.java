package com.example.demo.controller;

import com.example.demo.dto.CMRespDto;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
