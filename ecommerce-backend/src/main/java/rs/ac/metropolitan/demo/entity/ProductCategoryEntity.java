package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "product_category", schema = "ecommerce")
public class ProductCategoryEntity extends BaseEntity implements Serializable {

    @Basic(optional = false)
    @Column(name = "title")
    private String title;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "idProductCategory")
    @JsonIgnoreProperties("listOfProducts")
    @JsonIgnore()
    private List<ProductEntity> listOfProducts;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<ProductEntity> getListOfProducts() {
        return listOfProducts;
    }

    public void setListOfProducts(List<ProductEntity> listOfProducts) {
        this.listOfProducts = listOfProducts;
    }
}
