package com.turkcell.product_service.service;

import com.turkcell.product_service.dto.request.CreateProductRequest;
import com.turkcell.product_service.dto.request.UpdateProductRequest;
import com.turkcell.product_service.dto.response.ProductResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface ProductService {
    ProductResponse createProduct(CreateProductRequest request);
    ProductResponse updateProduct(UUID id, UpdateProductRequest request);
    void deleteProduct(UUID id);
    ProductResponse getProductById(UUID id);
    Page<ProductResponse> getAll(Pageable pageable);
}
