package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.OrderEntity;

@RestController
@RequestMapping(Const.ORDER_ROUTE)
public class OrderController extends GenericController<OrderEntity> {
}
