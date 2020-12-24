package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_info", schema = "ecommerce")
public class UserInfoEntity extends BaseEntity implements Serializable {
    private String fullName;
    private String email;
    private String telephone;

    @OneToMany(mappedBy = "idUserInfo",cascade = CascadeType.ALL)
    private List<OrderEntity> ordersById = new ArrayList<>();

    @OneToOne(mappedBy = "idUserInfo")
    private UserEntity idUser;

    @JoinColumn(name = "id_shipping_address", referencedColumnName = "id",nullable = false)
    @ManyToOne(optional = false,fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    private ShippingAddressEntity idShippingAddress;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }


    public List<OrderEntity> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(List<OrderEntity> ordersById) {
        this.ordersById = ordersById;
    }

    public UserEntity getIdUser() {
        return idUser;
    }

    public void setIdUser(UserEntity idUser) {
        this.idUser = idUser;
    }

    public ShippingAddressEntity getIdShippingAddress() {
        return idShippingAddress;
    }

    public void setIdShippingAddress(ShippingAddressEntity idShippingAddress) {
        this.idShippingAddress = idShippingAddress;
    }
}
