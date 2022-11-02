package com.example.demo.service;

import com.example.demo.dto.CollectionListRespDto;

import java.util.List;

public interface ProductService {
    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception;
    public Object getProduct(int pdtId) throws Exception;

}
