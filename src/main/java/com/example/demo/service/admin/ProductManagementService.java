package com.example.demo.service.admin;

import com.example.demo.dto.admin.ProductMstOptionRespDto;

import java.util.List;

public interface ProductManagementService {
    public List<ProductMstOptionRespDto> getProductMstList() throws Exception;
}
