package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "product_category", schema = "ecommerce")
public class ProductCategoryEntity extends BaseEntity implements Serializable {

    @Column(name = "title")
    private String title;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "idProductCategory")
    private List<ProductEntity> listOfProducts;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    @JsonIgnore
    public List<ProductEntity> getListOfProducts() {
        return listOfProducts;
    }

    public void setListOfProducts(List<ProductEntity> listOfProducts) {
        this.listOfProducts = listOfProducts;
    }

    public ProductCategoryEntity() {
    }

    public ProductCategoryEntity(String title) {
        this.title = title;
    }
}
