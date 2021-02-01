package rs.ac.metropolitan.demo.auth;

import com.google.gson.Gson;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import rs.ac.metropolitan.demo.EcommerceApp;
import rs.ac.metropolitan.demo.entity.UserEntity;
import java.awt.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import org.springframework.http.MediaType;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = EcommerceApp.class)
@EnableGlobalMethodSecurity(securedEnabled = true)
public class AuthRestTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    protected MockMvc mockMvc;

    @Before
    public void setup() throws Exception {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).apply(springSecurity())
                .build();
    }

    @Test
    public void auth() throws Exception {
        UserEntity userEntity = new UserEntity();

        userEntity.setUsername("admin");
        userEntity.setPassword("admin");

        Gson gson = new Gson();

        String jsonString = gson.toJson(userEntity);

        mockMvc.perform(post("/login").content(jsonString).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void wrongCredentials() throws Exception {
        UserEntity userEntity = new UserEntity();

        userEntity.setUsername("admin");
        userEntity.setPassword("sadasdasd");

        Gson gson = new Gson();

        String jsonString = gson.toJson(userEntity);

        mockMvc.perform(post("/login").content(jsonString).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isUnauthorized());
    }
}
