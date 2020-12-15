package rs.ac.metropolitan.demo.entity;

import org.hibernate.criterion.Order;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "order_list_of_products", schema = "ecommerce")
public class OrderListOfProductsEntity {
    private OrderEntity idOrder;
    private ProductEntity idProduct;
    private OrderEntity orderByIdOrder;
    private ProductEntity productByIdProduct;

    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id")
    public OrderEntity getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(OrderEntity idOrder) {
        this.idOrder = idOrder;
    }

    @ManyToOne
    @JoinColumn(name = "id_product", nullable = true, referencedColumnName = "id")
    public ProductEntity getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(ProductEntity idProduct) {
        this.idProduct = idProduct;
    }


    @ManyToOne
    @JoinColumn(name = "id_order", referencedColumnName = "id")
    public OrderEntity getOrderByIdOrder() {
        return orderByIdOrder;
    }

    public void setOrderByIdOrder(OrderEntity orderByIdOrder) {
        this.orderByIdOrder = orderByIdOrder;
    }

    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id")
    public ProductEntity getProductByIdProduct() {
        return productByIdProduct;
    }

    public void setProductByIdProduct(ProductEntity productByIdProduct) {
        this.productByIdProduct = productByIdProduct;
    }
}
