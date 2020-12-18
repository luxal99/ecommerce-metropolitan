package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "product", schema = "ecommerce")
public class ProductEntity extends BaseEntity implements Serializable {

    @Basic(optional = false)
    @Column(name = "title")
    private String title;

    @Basic(optional = false)
    @Column(name = "description")
    private String description;

    @Basic(optional = false)
    @Column(name = "amount")
    private Integer amount;

    @Basic(optional = false)
    @Column(name = "price")
    private Double price;

    @JoinColumn(name = "id_product_category", referencedColumnName = "id")
    @ManyToOne(optional = false)
    @JsonIgnore()
    private ProductCategoryEntity idProductCategory;

    @JoinColumn(name = "id_product_brand", referencedColumnName = "id")
    @ManyToOne(optional = false)
    @JsonIgnore()
    private ProductBrandEntity idProductBrand;

    @OneToMany(mappedBy = "idProduct")
    @JsonIgnore()
    private List<ProductImagesEntity> listOfImages;

    @ManyToMany(mappedBy = "listOfProducts")
    @JsonIgnore()
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
