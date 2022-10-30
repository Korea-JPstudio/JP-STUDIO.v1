
package com.example.demo.api.admin;

import com.example.demo.dto.CMRespDto;
import com.example.demo.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class ProductAdminApi {

    private final ProductManagementService productManagementService;

    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok()
                .body(new CMRespDto<>("get successfully", productManagementService.getCategoryList()));
    }
}
    @GetMapping("/option/products/mst")
    public ResponseEntity<?> getProductList() throws Exception {
        return ResponseEntity.ok().body(new CMRespDto<>("get successful", productManagementService.getProductMstList()));
    }
}
