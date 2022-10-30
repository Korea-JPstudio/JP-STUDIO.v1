package com.example.demo.service;

import com.example.demo.dto.CollectionListRespDto;
import com.example.demo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<CollectionListRespDto> getProductList(String category, int page) throws Exception {
        List<CollectionListRespDto> productList = new ArrayList<CollectionListRespDto>();
        Map<String,Object> map = new HashMap<String, Object>();
        map.put("category", category);
        map.put("index", (page - 1) * 9);

        productRepository.getProductList(map).forEach(collectionsProduct -> {
            productList.add(collectionsProduct.toDto());
        });

        return productList;
    }
}
