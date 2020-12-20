package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "shipping_address", schema = "ecommerce")
public class ShippingAddressEntity extends BaseEntity implements Serializable {
    private String city;
    private String address;
    private Integer postcode;
    @OneToMany(mappedBy = "idShippingAddress")
    private final List<UserInfoEntity> listOfUserInfo = new ArrayList<>();

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPostcode() {
        return postcode;
    }

    public void setPostcode(Integer postcode) {
        this.postcode = postcode;
    }

    public List<UserInfoEntity> getListOfUserInfo() {
        return listOfUserInfo;
    }
}
