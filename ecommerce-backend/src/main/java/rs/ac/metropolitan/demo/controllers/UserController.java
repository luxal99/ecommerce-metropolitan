package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.UserEntity;

@RestController
@RequestMapping(Const.USER_ROUTE)
public class UserController extends GenericController<UserEntity> {
}
