package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.UserInfoEntity;

@RestController
@RequestMapping(Const.USER_INFO_ROUTE)
public class UserInfoController extends GenericController<UserInfoEntity> {
}
