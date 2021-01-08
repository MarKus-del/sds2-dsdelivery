package com.markusdel.dsdelivery.repositories;

import com.markusdel.dsdelivery.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<Order, Long> {
}
