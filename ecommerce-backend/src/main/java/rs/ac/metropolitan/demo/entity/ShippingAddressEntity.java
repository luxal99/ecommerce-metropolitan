package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "shipping_address", schema = "ecommerce")
public class ShippingAddressEntity extends BaseEntity implements Serializable {
    private int id;
    private String city;
    private String address;
    private Integer postcode;
    private List<UserInfoEntity> userInfosById;


    @Basic
    @Column(name = "city", nullable = true, length = 64)
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "address", nullable = true, length = 64)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Basic
    @Column(name = "postcode", nullable = true)
    public Integer getPostcode() {
        return postcode;
    }

    public void setPostcode(Integer postcode) {
        this.postcode = postcode;
    }


    @OneToMany(mappedBy = "shippingAddressByIdShippingAddress")
    public List<UserInfoEntity> getUserInfosById() {
        return userInfosById;
    }

    public void setUserInfosById(List<UserInfoEntity> userInfosById) {
        this.userInfosById = userInfosById;
    }
}
