package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ShippingAddressEntity;

@RestController
@RequestMapping(Const.SHIPPING_ADDRESS_ROUTE)
public class ShippingAddressController extends GenericController<ShippingAddressEntity> {
}
