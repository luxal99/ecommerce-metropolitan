package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "order", schema = "ecommerce")
public class OrderEntity extends BaseEntity implements Serializable {
    private Integer idUserInfo;
    private Date date;
    private Double total;
    private UserInfoEntity userInfoByIdUserInfo;
    private List<OrderListOfProductsEntity> orderListOfProductsById;

    @Basic
    @Column(name = "id_user_info", nullable = true)
    public Integer getIdUserInfo() {
        return idUserInfo;
    }

    public void setIdUserInfo(Integer idUserInfo) {
        this.idUserInfo = idUserInfo;
    }

    @Basic
    @Column(name = "date", nullable = true)
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "total", nullable = true, precision = 0)
    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
    @ManyToOne
    @JoinColumn(name = "id_user_info", referencedColumnName = "id")
    public UserInfoEntity getUserInfoByIdUserInfo() {
        return userInfoByIdUserInfo;
    }

    public void setUserInfoByIdUserInfo(UserInfoEntity userInfoByIdUserInfo) {
        this.userInfoByIdUserInfo = userInfoByIdUserInfo;
    }

    @OneToMany(mappedBy = "orderByIdOrder")
    public List<OrderListOfProductsEntity> getOrderListOfProductsById() {
        return orderListOfProductsById;
    }

    public void setOrderListOfProductsById(List<OrderListOfProductsEntity> orderListOfProductsById) {
        this.orderListOfProductsById = orderListOfProductsById;
    }
}
