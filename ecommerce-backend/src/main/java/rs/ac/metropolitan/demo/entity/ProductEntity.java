package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "product", schema = "ecommerce")
public class ProductEntity extends BaseEntity implements Serializable {
    private Integer idProductCategory;
    private Integer idProductBrand;
    private String title;
    private String description;
    private Integer amount;
    private Double price;
    private List<OrderListOfProductsEntity> orderListOfProductsById;
    private ProductCategoryEntity productCategoryByIdProductCategory;
    private ProductBrandEntity productBrandByIdProductBrand;
    private List<ProductImagesEntity> productImagesById;


    @Basic
    @Column(name = "id_product_category", nullable = true)
    public Integer getIdProductCategory() {
        return idProductCategory;
    }

    public void setIdProductCategory(Integer idProductCategory) {
        this.idProductCategory = idProductCategory;
    }

    @Basic
    @Column(name = "id_product_brand", nullable = true)
    public Integer getIdProductBrand() {
        return idProductBrand;
    }

    public void setIdProductBrand(Integer idProductBrand) {
        this.idProductBrand = idProductBrand;
    }

    @Basic
    @Column(name = "title", nullable = true, length = 64)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "description", nullable = true, length = -1)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "amount", nullable = true)
    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    @Basic
    @Column(name = "price", nullable = true, precision = 0)
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @OneToMany(mappedBy = "productByIdProduct")
    public List<OrderListOfProductsEntity> getOrderListOfProductsById() {
        return orderListOfProductsById;
    }

    public void setOrderListOfProductsById(List<OrderListOfProductsEntity> orderListOfProductsById) {
        this.orderListOfProductsById = orderListOfProductsById;
    }

    @ManyToOne
    @JoinColumn(name = "id_product_category", referencedColumnName = "id")
    public ProductCategoryEntity getProductCategoryByIdProductCategory() {
        return productCategoryByIdProductCategory;
    }

    public void setProductCategoryByIdProductCategory(ProductCategoryEntity productCategoryByIdProductCategory) {
        this.productCategoryByIdProductCategory = productCategoryByIdProductCategory;
    }

    @ManyToOne
    @JoinColumn(name = "id_product_brand", referencedColumnName = "id")
    public ProductBrandEntity getProductBrandByIdProductBrand() {
        return productBrandByIdProductBrand;
    }

    public void setProductBrandByIdProductBrand(ProductBrandEntity productBrandByIdProductBrand) {
        this.productBrandByIdProductBrand = productBrandByIdProductBrand;
    }

    @OneToMany(mappedBy = "productByIdProduct")
    public List<ProductImagesEntity> getProductImagesById() {
        return productImagesById;
    }

    public void setProductImagesById(List<ProductImagesEntity> productImagesById) {
        this.productImagesById = productImagesById;
    }
}
