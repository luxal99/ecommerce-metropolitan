package rs.ac.metropolitan.demo.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ShippingAddressEntity;
import rs.ac.metropolitan.demo.repository.ShippingAddressRepository;

import javax.servlet.http.HttpServletRequest;

import static rs.ac.metropolitan.demo.constants.Const.*;

@RestController
@RequestMapping(Const.SHIPPING_ADDRESS_ROUTE)
public class ShippingAddressController extends GenericController<ShippingAddressEntity> {

    @Autowired
    private ShippingAddressRepository shippingAddressRepository;

    @GetMapping("/byUser")
    public ResponseEntity<ShippingAddressEntity> getShippingAddressByUser(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        String username = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                .build()
                .verify(token.replace(TOKEN_PREFIX, ""))
                .getSubject();


        for (ShippingAddressEntity shippingAddressEntity : shippingAddressRepository.findAll()) {
            if (shippingAddressEntity.getUserInfoEntity().getIdUser().getUsername().equals(username)) {
                return ResponseEntity.ok(shippingAddressEntity);
            }
        }
        return null;
    }
}
