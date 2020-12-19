package rs.ac.metropolitan.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.UserEntity;
import rs.ac.metropolitan.demo.repository.UserRepository;
import rs.ac.metropolitan.demo.service.PasswordService;

@RestController
@RequestMapping(Const.USER_ROUTE)
public class UserController {

    @Autowired
    private PasswordService passwordService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("")
    private String save(@RequestBody() UserEntity user) {
//        try {
            user.setPassword(passwordService.passwordEncoder().encode(user.getPassword()));
            userRepository.save(user);
            return String.valueOf(HttpStatus.OK);
//        } catch (Exception exception) {
//            return String.valueOf(HttpStatus.BAD_REQUEST);
//        }
    }
}
