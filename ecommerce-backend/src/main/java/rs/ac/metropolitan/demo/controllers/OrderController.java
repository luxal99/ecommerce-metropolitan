package rs.ac.metropolitan.demo.controllers;

import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import com.auth0.jwt.JWT;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.OrderEntity;
import rs.ac.metropolitan.demo.repository.OrderRepository;
import rs.ac.metropolitan.demo.repository.UserRepository;

import static rs.ac.metropolitan.demo.constants.Const.*;

@RestController
@RequestMapping(Const.ORDER_ROUTE)
public class OrderController extends GenericController<OrderEntity> {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/create")
    public OrderEntity createOrder(HttpServletRequest request, @RequestBody OrderEntity orderEntity) {
        String token = request.getHeader(HEADER_STRING);
        String username = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                .build()
                .verify(token.replace(TOKEN_PREFIX, ""))
                .getSubject();
        orderEntity.setIdUserInfo(userRepository.findUserEntityByUsername(username).getIdUserInfo());
        return orderRepository.save(orderEntity);
    }
}
