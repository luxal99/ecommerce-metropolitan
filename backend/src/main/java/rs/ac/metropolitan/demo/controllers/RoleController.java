package rs.ac.metropolitan.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.RoleEntity;
import rs.ac.metropolitan.demo.repository.RoleRepository;

import javax.management.relation.Role;

@RestController
@RequestMapping(Const.ROLE_ROUTE)
public class RoleController extends GenericController<RoleEntity> {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("/byName")
    public ResponseEntity<RoleEntity> findRoleByTitle(@RequestParam("title") String title) throws Exception {
        return ResponseEntity.ok(roleRepository.findRoleEntityByTitle(title));
    }
}
