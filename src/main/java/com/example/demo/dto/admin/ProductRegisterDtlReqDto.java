package com.example.demo.dto.admin;

<<<<<<< HEAD

import com.example.demo.domain.ProductDetail;

=======
import com.example.demo.domain.ProductDetail;
>>>>>>> origin/main
import lombok.Data;

@Data
public class ProductRegisterDtlReqDto {
    private int pdtId;
    private int pdtSize;
    private int pdtStock;
    public ProductDetail toEntity() {
        return ProductDetail.builder()
                .pdt_id(pdtId)
                .size_id(pdtSize)
                .pdt_stock(pdtStock)
                .build();
    }
}
