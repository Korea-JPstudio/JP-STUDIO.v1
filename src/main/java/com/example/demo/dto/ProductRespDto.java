package com.example.demo.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

<<<<<<< HEAD

@Builder
@Data
=======
@Data
@Builder
>>>>>>> origin/main
public class ProductRespDto {

    private int pdtId;
    private String pdtName;
    private int pdtPrice;
    private List<String> pdtImgs;

}
