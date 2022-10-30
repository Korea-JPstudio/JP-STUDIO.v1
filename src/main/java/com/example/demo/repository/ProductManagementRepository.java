package com.example.demo.repository;

import com.example.demo.domain.OptionProductMst;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public List<OptionProductMst> getProductMstList() throws Exception;
}
