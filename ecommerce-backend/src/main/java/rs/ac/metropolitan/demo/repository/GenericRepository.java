package rs.ac.metropolitan.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rs.ac.metropolitan.demo.entity.BaseEntity;

import java.io.Serializable;

public interface GenericRepository<T extends BaseEntity> extends JpaRepository<T, Serializable> {
}
