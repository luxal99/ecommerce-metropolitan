package rs.ac.metropolitan.demo.controllers;

import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

import com.auth0.jwt.JWT;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.OrderEntity;
import rs.ac.metropolitan.demo.entity.ProductEntity;
import rs.ac.metropolitan.demo.repository.OrderRepository;
import rs.ac.metropolitan.demo.repository.ProductRepository;
import rs.ac.metropolitan.demo.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

import static rs.ac.metropolitan.demo.constants.Const.*;

@RestController
@RequestMapping(Const.ORDER_ROUTE)
public class OrderController extends GenericController<OrderEntity> {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;


    @PostMapping("/create")
    public ResponseEntity<String> createOrder(HttpServletRequest request, @RequestBody OrderEntity orderEntity) {
        try {
            String token = request.getHeader(HEADER_STRING);
            String username = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                    .build()
                    .verify(token.replace(TOKEN_PREFIX, ""))
                    .getSubject();
            orderEntity.setIdUserInfo(userRepository.findUserEntityByUsername(username).getIdUserInfo());

            for (ProductEntity productEntity : orderEntity.getListOfProducts()) {
                ProductEntity product = productRepository.findById(productEntity.getId()).get();
                product.setAmount(product.getAmount() - 1);
                productRepository.save(product);
            }
            orderRepository.save(orderEntity);


            return ResponseEntity.ok(HttpStatus.OK.toString());
        } catch (Exception err) {
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(err.getMessage());
        }
    }

    @GetMapping("/byUser")
    public ResponseEntity<List<OrderEntity>> findOrderByUser(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        String username = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                .build()
                .verify(token.replace(TOKEN_PREFIX, ""))
                .getSubject();

        List<OrderEntity> orderEntityList = new ArrayList<>();

        for (OrderEntity orderEntity : orderRepository.findAll()) {
            if (orderEntity.getIdUserInfo().getIdUser().getUsername().equals(username)) {
                orderEntityList.add(orderEntity);
            }
        }
        return ResponseEntity.ok(orderEntityList);
    }
}
