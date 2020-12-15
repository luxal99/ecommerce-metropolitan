package rs.ac.metropolitan.demo.entity;

import org.hibernate.criterion.Order;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "product", schema = "ecommerce")
public class ProductEntity extends BaseEntity implements Serializable {
    private String title;
    private String description;
    private Integer amount;
    private Double price;

    @JoinColumn(name = "id_product_category", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private ProductCategoryEntity idProductCategory;

    @JoinColumn(name = "id_product_brand", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private ProductBrandEntity idProductBrand;

    @OneToMany(mappedBy = "idProduct")
    private List<ProductImagesEntity> listOfImages;

    @ManyToMany(mappedBy = "listOfProducts")
    private final List<OrderEntity> listOfOrders = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public ProductCategoryEntity getIdProductCategory() {
        return idProductCategory;
    }

    public void setIdProductCategory(ProductCategoryEntity idProductCategory) {
        this.idProductCategory = idProductCategory;
    }

    public ProductBrandEntity getIdProductBrand() {
        return idProductBrand;
    }

    public void setIdProductBrand(ProductBrandEntity idProductBrand) {
        this.idProductBrand = idProductBrand;
    }

    public List<ProductImagesEntity> getListOfImages() {
        return listOfImages;
    }

    public void setListOfImages(List<ProductImagesEntity> listOfImages) {
        this.listOfImages = listOfImages;
    }

    public List<OrderEntity> getListOfOrders() {
        return listOfOrders;
    }
}
