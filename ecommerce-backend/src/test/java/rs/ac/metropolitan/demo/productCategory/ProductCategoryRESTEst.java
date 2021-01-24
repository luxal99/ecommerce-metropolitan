package rs.ac.metropolitan.demo.productCategory;

import com.google.gson.Gson;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import rs.ac.metropolitan.demo.EcommerceApp;
import rs.ac.metropolitan.demo.constants.Const;
import rs.ac.metropolitan.demo.entity.ProductCategoryEntity;
import rs.ac.metropolitan.demo.entity.UserEntity;
import rs.ac.metropolitan.demo.repository.ProductCategoryRepository;
import rs.ac.metropolitan.demo.util.RandomStringUtil;

import java.util.List;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = EcommerceApp.class)
@EnableGlobalMethodSecurity(securedEnabled = true)
public class ProductCategoryRESTEst {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    protected MockMvc mockMvc;

    @Before
    public void setup() throws Exception {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).apply(springSecurity())
                .build();
    }

    @Test
    public void createProductCategory() throws Exception {
        ProductCategoryEntity productCategoryEntity = new ProductCategoryEntity();

        productCategoryEntity.setTitle(RandomStringUtil.generateRandomString());
        Gson gson = new Gson();
        String jsonString = gson.toJson(productCategoryEntity);

        mockMvc.perform(post("/productCategory").contentType(MediaType.APPLICATION_JSON).content(jsonString)
                .with(user("admin").password("admin").roles("ADMIN")))
                .andExpect(status().isOk());
    }

    @Test
    public void getProducts() throws Exception {
        mockMvc.perform(get(Const.PRODUCT_CATEGORY_ROUTE)).andExpect(status().isNoContent());
    }

    @Test
    public void deleteProductCategory() throws Exception {
        List<ProductCategoryEntity> productCategoryEntityList = productCategoryRepository.findAll();

        ProductCategoryEntity randomProductCategoryEntity =
                productCategoryEntityList.get((int) (Math.random() * productCategoryEntityList.size() + 1));

        mockMvc.perform(delete(Const.PRODUCT_CATEGORY_ROUTE + "/" + randomProductCategoryEntity.getId())
                .with(user("admin").password("admin").roles("ADMIN"))).andExpect(status().isOk());

        mockMvc.perform(get(Const.PRODUCT_CATEGORY_ROUTE)
                .queryParam("id", String.valueOf(randomProductCategoryEntity.getId()))).andExpect(status().isNoContent());


    }

}
