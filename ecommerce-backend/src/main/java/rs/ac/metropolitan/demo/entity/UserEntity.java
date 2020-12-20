package rs.ac.metropolitan.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "ecommerce")
public class UserEntity extends BaseEntity implements Serializable {
    private String username;
    private String password;

    @JoinColumn(name = "id_role", referencedColumnName = "id")
    @ManyToOne(optional = false)
    @JsonIgnore()
    private RoleEntity idRole;

    @OneToOne()
    @JoinColumn(name = "id_user_info", referencedColumnName = "id")
    private UserInfoEntity idUserInfo;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RoleEntity getIdRole() {
        return idRole;
    }

    public void setIdRole(RoleEntity idRole) {
        this.idRole = idRole;
    }

    public UserInfoEntity getIdUserInfo() {
        return idUserInfo;
    }

    public void setIdUserInfo(UserInfoEntity idUserInfo) {
        this.idUserInfo = idUserInfo;
    }
}
