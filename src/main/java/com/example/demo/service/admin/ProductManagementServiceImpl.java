package com.example.demo.service.admin;

import com.example.demo.dto.admin.ProductMstOptionRespDto;
import com.example.demo.repository.ProductManagementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
