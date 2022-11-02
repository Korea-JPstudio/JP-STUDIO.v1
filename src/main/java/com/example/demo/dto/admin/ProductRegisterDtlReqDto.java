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
<<<<<<< HEAD
    private String pdtColor;
=======
>>>>>>> origin/main
    private int pdtStock;

    public ProductDetail toEntity() {
        return ProductDetail.builder()
                .pdt_id(pdtId)
                .size_id(pdtSize)
<<<<<<< HEAD
                .pdt_color(pdtColor)
                .pdt_stock(pdtStock)
                .build();
    }
}
=======
                .pdt_stock(pdtStock)
                .build();
    }
}
>>>>>>> origin/main
