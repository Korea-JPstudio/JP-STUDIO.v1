package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

<<<<<<< HEAD
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
=======
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder

>>>>>>> origin/main
public class ProductDetail {
    private int id;
    private int pdt_id;
    private int size_id;
    private String size_name;
<<<<<<< HEAD
    private String pdt_color;
    private int pdt_stock;

}
=======
    private int pdt_stock;

}
>>>>>>> origin/main
