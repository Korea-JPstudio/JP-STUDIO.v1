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
<<<<<<< HEAD
    private String pdtSimpleInfo;
    private String pdtDetailInfo;
    private String pdtOptionInfo;
    private String pdtManagementInfo;
    private String pdtShippingInfo;
    private Map<String, List<Map<String, Object>>> pdtColors;
=======
>>>>>>> origin/main
    private List<String> pdtImgs;

}
