package com.example.demo.repository.admin;

import com.example.demo.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public List<ProductCategory> getCategoryList() throws Exception;

    public List<OptionProductMst> getProductMstList() throws Exception;
}
