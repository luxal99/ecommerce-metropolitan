package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@XmlRootElement
@Table(name = "role", schema = "ecommerce")
public class RoleEntity extends BaseEntity implements Serializable {

    private String title;

    @OneToMany(mappedBy = "idRole")
    @JsonIgnore()
    private List<UserEntity> listOfUsers = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<UserEntity> getListOfUsers() {
        return listOfUsers;
    }

    public void setListOfUsers(List<UserEntity> listOfUsers) {
        this.listOfUsers = listOfUsers;
    }
}
