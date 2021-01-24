package rs.ac.metropolitan.demo.order;

import com.google.gson.Gson;
import com.mysql.cj.xdevapi.JsonString;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import rs.ac.metropolitan.demo.EcommerceApp;
import rs.ac.metropolitan.demo.entity.ProductCategoryEntity;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = EcommerceApp.class)
@EnableGlobalMethodSecurity(securedEnabled = true)
public class OrderRESTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    protected MockMvc mockMvc;

    @Before
    public void setup() throws Exception {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).apply(springSecurity())
                .build();
    }

    @Test
    public void getOrderWithoutAuth() throws Exception {

        mockMvc.perform(get("/order").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isForbidden());
    }

    @Test
    public void createOrder() throws Exception {
        ProductCategoryEntity productCategoryEntity = new ProductCategoryEntity();

        productCategoryEntity.setTitle("Neki tamo");
        Gson gson = new Gson();
        String jsonString = gson.toJson(productCategoryEntity);

        System.out.println(jsonString);

        mockMvc.perform(post("/productCategory").contentType(MediaType.APPLICATION_JSON).content(jsonString)
                .with(user("admin").password("admin").roles("ADMIN")))
                .andExpect(status().isOk());
    }

    @Test
    public void getOrdersWithAuth() throws Exception {

        mockMvc.perform(get("/order").with(user("admin").password("admin").roles("ADMIN")).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
