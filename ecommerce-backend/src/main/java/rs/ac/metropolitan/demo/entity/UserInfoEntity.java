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

    @OneToMany(mappedBy = "idUserInfo")
    private List<OrderEntity> ordersById = new ArrayList<>();

    @OneToOne(mappedBy = "idUserInfo")
    private UserEntity usersById;

    @JoinColumn(name = "id_shipping_address", referencedColumnName = "id")
    @ManyToOne(optional = false)
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

    public UserEntity getUsersById() {
        return usersById;
    }

    public void setUsersById(UserEntity usersById) {
        this.usersById = usersById;
    }

    public ShippingAddressEntity getIdShippingAddress() {
        return idShippingAddress;
    }

    public void setIdShippingAddress(ShippingAddressEntity idShippingAddress) {
        this.idShippingAddress = idShippingAddress;
    }
}
