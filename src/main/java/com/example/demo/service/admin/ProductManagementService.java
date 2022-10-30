package com.example.demo.service.admin;

import com.example.demo.dto.admin.*;
import com.example.demo.dto.admin.ProductMstOptionRespDto;

import java.util.List;

public interface ProductManagementService {
    public List<CategoryResponseDto> getCategoryList() throws Exception;
    public List<ProductMstOptionRespDto> getProductMstList() throws Exception;
}
