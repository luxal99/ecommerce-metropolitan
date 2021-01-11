package rs.ac.metropolitan.demo.test;

import org.assertj.core.api.Assertions;
import org.junit.Test;


import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import org.springframework.test.context.junit4.SpringRunner;
import rs.ac.metropolitan.demo.entity.ProductCategoryEntity;
import rs.ac.metropolitan.demo.repository.ProductCategoryRepository;

import javax.persistence.Query;
import java.util.List;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ProductCategoryTest {


    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;


    @Test
    public void findProductByName() {
        ProductCategoryEntity productEntity = new ProductCategoryEntity();
        productEntity.setTitle("Test kategorija");

        entityManager.persist(productEntity);
        entityManager.flush();

        ProductCategoryEntity found = productCategoryRepository.findByTitle(productEntity.getTitle());
        Assertions.assertThat(found.getTitle()).isEqualTo(productEntity.getTitle());
    }

    @Test
    public void getAllProductCategories() {
        ProductCategoryEntity productEntity = new ProductCategoryEntity();
        productEntity.setTitle("Test kategorija");

        int arraySizeBeforePersist = productCategoryRepository.findAll().size();
        entityManager.persist(productEntity);
        entityManager.flush();

        Query query = entityManager.getEntityManager().createNativeQuery("select * from product_category");
        List<ProductCategoryEntity> productCategoryEntities = query.getResultList();

        Assertions.assertThat(arraySizeBeforePersist).isLessThan(productCategoryEntities.size());
    }

    @Test
    public void updateProductCategory() {
        ProductCategoryEntity productCategoryEntity = productCategoryRepository.saveAndFlush(new ProductCategoryEntity("Test"));
        String oldTittle = productCategoryEntity.getTitle();
        productCategoryEntity.setTitle("Updated");

        ProductCategoryEntity updated = productCategoryRepository.saveAndFlush(productCategoryEntity);

        Assertions.assertThat(updated.getId()).isEqualTo(productCategoryEntity.getId());
        Assertions.assertThat(oldTittle).isNotEqualTo(updated.getTitle());
    }

    @Test
    public void deleteProductCategory() {
        ProductCategoryEntity productCategoryEntity = productCategoryRepository.saveAndFlush(new ProductCategoryEntity("Test"));
        int listSizeBeforeDelete = productCategoryRepository.findAll().size();

        productCategoryRepository.deleteById(productCategoryEntity.getId());
        int listSizeAfterDelete = productCategoryRepository.findAll().size();

       Assertions.assertThat(listSizeBeforeDelete).isGreaterThan(listSizeAfterDelete);

    }
}
