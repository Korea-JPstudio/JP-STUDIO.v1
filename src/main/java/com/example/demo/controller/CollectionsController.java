package com.example.demo.controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class CollectionsController {

    @GetMapping("/collections/{category}")
    public String loadCollections(@PathVariable String category) {

        return "product/product_collection";
    }

}
