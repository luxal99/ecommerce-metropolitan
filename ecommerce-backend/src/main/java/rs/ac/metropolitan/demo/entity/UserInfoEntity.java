package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "user_info", schema = "ecommerce")
public class UserInfoEntity extends BaseEntity implements Serializable {
    private String fullName;
    private String email;
    private String telephone;
    private Integer idShippingAddress;
    private List<OrderEntity> ordersById;
    private List<UserEntity> usersById;
    private ShippingAddressEntity shippingAddressByIdShippingAddress;

    @Basic
    @Column(name = "full_name", nullable = true, length = 128)
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Basic
    @Column(name = "email", nullable = true, length = 128)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "telephone", nullable = true, length = 128)
    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @Basic
    @Column(name = "id_shipping_address", nullable = true)
    public Integer getIdShippingAddress() {
        return idShippingAddress;
    }

    public void setIdShippingAddress(Integer idShippingAddress) {
        this.idShippingAddress = idShippingAddress;
    }

    @OneToMany(mappedBy = "userInfoByIdUserInfo")
    public List<OrderEntity> getOrdersById() {
        return ordersById;
    }

    public void setOrdersById(List<OrderEntity> ordersById) {
        this.ordersById = ordersById;
    }

    @OneToMany(mappedBy = "userInfoByIdUserInfo")
    public List<UserEntity> getUsersById() {
        return usersById;
    }

    public void setUsersById(List<UserEntity> usersById) {
        this.usersById = usersById;
    }

    @ManyToOne
    @JoinColumn(name = "id_shipping_address", referencedColumnName = "id")
    public ShippingAddressEntity getShippingAddressByIdShippingAddress() {
        return shippingAddressByIdShippingAddress;
    }

    public void setShippingAddressByIdShippingAddress(ShippingAddressEntity shippingAddressByIdShippingAddress) {
        this.shippingAddressByIdShippingAddress = shippingAddressByIdShippingAddress;
    }
}
