package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ProductEntity;

@RestController
@RequestMapping(Const.PRODUCT_ROUTE)
public class ProductController extends GenericController<ProductEntity> {
}
