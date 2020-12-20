package rs.ac.metropolitan.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.ac.metropolitan.demo.entity.UserEntity;
import rs.ac.metropolitan.demo.repository.UserRepository;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        UserEntity userEntity = new UserEntity();
        for (UserEntity entity : userRepository.findAll()) {
            if (entity.getUsername().equalsIgnoreCase(s)) {
                userEntity = entity;
            }
        }
        if (userEntity == null) {
            throw new UsernameNotFoundException(s);
        }
        return new User(userEntity.getUsername(), userEntity.getPassword(), emptyList());
    }
}
