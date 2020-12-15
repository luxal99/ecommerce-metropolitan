package rs.ac.metropolitan.demo.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "ecommerce")
public class UserEntity extends  BaseEntity implements Serializable {
    private String username;
    private String password;
    private Integer idRole;
    private Integer idUserInfo;
    private RoleEntity roleByIdRole;
    private UserInfoEntity userInfoByIdUserInfo;

    @Basic
    @Column(name = "username", nullable = false, length = 64)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password", nullable = false, length = 64)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "id_role", nullable = true)
    public Integer getIdRole() {
        return idRole;
    }

    public void setIdRole(Integer idRole) {
        this.idRole = idRole;
    }

    @Basic
    @Column(name = "id_user_info", nullable = true)
    public Integer getIdUserInfo() {
        return idUserInfo;
    }

    public void setIdUserInfo(Integer idUserInfo) {
        this.idUserInfo = idUserInfo;
    }


    @ManyToOne
    @JoinColumn(name = "id_role", referencedColumnName = "id")
    public RoleEntity getRoleByIdRole() {
        return roleByIdRole;
    }

    public void setRoleByIdRole(RoleEntity roleByIdRole) {
        this.roleByIdRole = roleByIdRole;
    }

    @ManyToOne
    @JoinColumn(name = "id_user_info", referencedColumnName = "id")
    public UserInfoEntity getUserInfoByIdUserInfo() {
        return userInfoByIdUserInfo;
    }

    public void setUserInfoByIdUserInfo(UserInfoEntity userInfoByIdUserInfo) {
        this.userInfoByIdUserInfo = userInfoByIdUserInfo;
    }
}
