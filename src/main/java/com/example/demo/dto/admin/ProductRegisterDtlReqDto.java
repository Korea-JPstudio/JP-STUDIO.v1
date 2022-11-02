package com.example.demo.dto.admin;


import com.example.demo.domain.ProductDetail;

import lombok.Data;

@Data
public class ProductRegisterDtlReqDto {
    private int pdtId;
    private int pdtSize;
    private String pdtColor;
    private int pdtStock;

    public ProductDetail toEntity() {
        return ProductDetail.builder()
                .pdt_id(pdtId)
                .size_id(pdtSize)
                .pdt_color(pdtColor)
                .pdt_stock(pdtStock)
                .build();
    }
}