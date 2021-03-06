package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @OneToOne(optional = false,fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    private ShippingAddressEntity idShippingAddress;

    public UserInfoEntity() {
    }

    public UserInfoEntity(String fullName, String email, String telephone, List<OrderEntity> ordersById, UserEntity idUser, ShippingAddressEntity idShippingAddress) {
        this.fullName = fullName;
        this.email = email;
        this.telephone = telephone;
        this.ordersById = ordersById;
        this.idUser = idUser;
        this.idShippingAddress = idShippingAddress;
    }

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


    @JsonIgnore
    public List<OrderEntity> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(List<OrderEntity> ordersById) {
        this.ordersById = ordersById;
    }

    @JsonIgnore
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
