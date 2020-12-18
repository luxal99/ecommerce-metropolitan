package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ProductCategoryEntity;

@RestController
@RequestMapping(Const.PRODUCT_CATEGORY_ROUTE)
public class ProductCategoryController extends GenericController<ProductCategoryEntity> {

}
