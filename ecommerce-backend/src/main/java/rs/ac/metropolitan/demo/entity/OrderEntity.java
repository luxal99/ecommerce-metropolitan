package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders", schema = "ecommerce")
public class OrderEntity extends BaseEntity implements Serializable {

    private Date date;
    private Double total;
    private String orderStatus;
    @JoinColumn(name = "id_user_info", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private UserInfoEntity idUserInfo;

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }


    public UserInfoEntity getIdUserInfo() {
        return idUserInfo;
    }

    public void setIdUserInfo(UserInfoEntity idUserInfo) {
        this.idUserInfo = idUserInfo;
    }

    public List<ProductEntity> getListOfProducts() {
        return listOfProducts;
    }

    @ManyToMany()
    @JoinTable(name = "order_products", joinColumns = {@JoinColumn(name = "id_order")},
            inverseJoinColumns = {@JoinColumn(name = "id_product")})
    private final List<ProductEntity> listOfProducts = new ArrayList<>();
}
