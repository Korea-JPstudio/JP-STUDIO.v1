package com.example.demo.service;

import com.example.demo.dto.CheckoutRespDto;
import com.example.demo.dto.CollectionListRespDto;
import com.example.demo.dto.ProductRespDto;

import java.util.List;

public interface ProductService {
    
    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception;
    public ProductRespDto getProduct(int pdtId) throws Exception;



}
