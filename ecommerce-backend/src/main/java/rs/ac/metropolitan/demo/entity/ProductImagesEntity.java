package rs.ac.metropolitan.demo.entity;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "product_images", schema = "ecommerce")
@XmlRootElement
public class ProductImagesEntity extends BaseEntity implements Serializable {
    private String title;
    private String url;

    @JsonBackReference
    @JoinColumn(name = "id_product", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private ProductEntity idProduct;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ProductEntity getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(ProductEntity idProduct) {
        this.idProduct = idProduct;
    }
}
