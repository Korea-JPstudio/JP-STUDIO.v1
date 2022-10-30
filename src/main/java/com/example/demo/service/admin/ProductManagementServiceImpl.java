package com.example.demo.service.admin;

import com.example.demo.dto.admin.CategoryResponseDto;
import com.example.demo.repository.admin.ProductManagementRepository;
import com.example.demo.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ResourceLoader;
import com.example.demo.dto.admin.ProductMstOptionRespDto;
import com.example.demo.repository.ProductManagementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductManagementServiceImpl implements ProductManagementService {

    private final ResourceLoader resourceLoader;
    private final ProductManagementRepository productManagementRepository;

    @Override
    public List<CategoryResponseDto> getCategoryList() throws Exception {
        List<CategoryResponseDto> categoryResponseDtos = new ArrayList<CategoryResponseDto>();
        productManagementRepository.getCategoryList().forEach(category -> {
            categoryResponseDtos.add(category.toDto());
        });
        return categoryResponseDtos;
    }
}
@Service
@RequiredArgsConstructor
public class ProductManagementServiceImpl implements ProductManagementService{

    private final ProductManagementRepository productManagementRepository;
    @Override
    public List<ProductMstOptionRespDto> getProductMstList() throws Exception {
        List<ProductMstOptionRespDto> list = new ArrayList<ProductMstOptionRespDto>();
        productManagementRepository.getProductMstList().forEach(pdtMst ->{
            list.add(pdtMst.toDto());
        });
        return list;
    }
}
