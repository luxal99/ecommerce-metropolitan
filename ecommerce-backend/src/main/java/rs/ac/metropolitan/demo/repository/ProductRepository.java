package rs.ac.metropolitan.demo.repository;

import rs.ac.metropolitan.demo.entity.ProductEntity;

public interface ProductRepository extends GenericRepository<ProductEntity> {
    public ProductEntity findByTitle(String title);
}
