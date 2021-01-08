package com.markusdel.dsdelivery.controllers;

import com.markusdel.dsdelivery.dto.OrderDTO;
import com.markusdel.dsdelivery.dto.ProductDTO;
import com.markusdel.dsdelivery.services.OrderService;
import com.markusdel.dsdelivery.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    private OrderService services;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {
        List<OrderDTO> list = services.findAll();
        return ResponseEntity.ok().body(list);
    }

}
