package rs.ac.metropolitan.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.RoleEntity;

@RestController
@RequestMapping(Const.ROLE_ROUTE)
public class RoleController extends GenericController<RoleEntity> {
}
