package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "product", schema = "ecommerce")
@XmlRootElement
public class ProductEntity extends BaseEntity implements Serializable {

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "price")
    private Double price;

    @JoinColumn(name = "id_product_category", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private ProductCategoryEntity idProductCategory;

    @JoinColumn(name = "id_product_brand", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private ProductBrandEntity idProductBrand;

    @JsonManagedReference
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

    @JsonIgnore
    public List<OrderEntity> getListOfOrders() {
        return listOfOrders;
    }
}
