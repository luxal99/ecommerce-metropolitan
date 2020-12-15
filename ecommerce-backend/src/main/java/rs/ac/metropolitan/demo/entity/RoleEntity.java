package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "role", schema = "ecommerce")
public class RoleEntity extends BaseEntity implements Serializable {
    private String title;
    private List<UserEntity> usersById;


    @Basic
    @Column(name = "title", nullable = true, length = 64)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    @OneToMany(mappedBy = "roleByIdRole")
    public List<UserEntity> getUsersById() {
        return usersById;
    }

    public void setUsersById(List<UserEntity> usersById) {
        this.usersById = usersById;
    }
}
