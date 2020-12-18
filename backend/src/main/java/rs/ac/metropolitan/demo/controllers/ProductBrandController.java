package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ProductBrandEntity;

@RestController
@RequestMapping(Const.PRODUCT_BRAND_ROUTE)
public class ProductBrandController extends GenericController<ProductBrandEntity> {
}
