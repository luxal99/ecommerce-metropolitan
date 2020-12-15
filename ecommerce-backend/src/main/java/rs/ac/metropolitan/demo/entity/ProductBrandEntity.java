package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "product_brand", schema = "ecommerce")
public class ProductBrandEntity extends BaseEntity implements Serializable {
    private int id;
    private String title;
    private Collection<ProductEntity> productsById;

    @Basic
    @Column(name = "title", nullable = true, length = 64)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @OneToMany(mappedBy = "productBrandByIdProductBrand")
    public Collection<ProductEntity> getProductsById() {
        return productsById;
    }

    public void setProductsById(Collection<ProductEntity> productsById) {
        this.productsById = productsById;
    }
}
