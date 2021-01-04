# Ecommerce

## Description

Basic ecommerce web application. This is my university project.

## Technologies

1. MySQL
2. SpringBoot
3. Angular 8.2.3 with Material

## Functionality

1. Product CRUD
2. Product brand CRUD
3. Product category CRUD
4. Create order
5. Order preview
6. Cart service
7. JWT
8. Role based
9. Bcrypt for password hash

## How to run project ?

### Requirements

1. MySQL server
2.Java
3.Angular 8.2.3

If you have all of the requirements met you can go to the next step

## DDL

```mysql
create database ecommerce;
use ecommerce;
```

```mysql
create table product_brand
(
	id int auto_increment
		primary key,
	title varchar(64) null
);

create table product_category
(
	id int auto_increment
		primary key,
	title varchar(64) null,
	constraint title
		unique (title)
);

create table product
(
	id int auto_increment
		primary key,
	id_product_category int null,
	id_product_brand int null,
	title varchar(64) null,
	description longtext null,
	amount int null,
	price double null,
	initial_cart_size int default 1 null,
	constraint product_ibfk_1
		foreign key (id_product_category) references product_category (id),
	constraint product_ibfk_2
		foreign key (id_product_brand) references product_brand (id)
);

create index id_product_brand
	on product (id_product_brand);

create index id_product_category
	on product (id_product_category);

create table product_images
(
	id int auto_increment
		primary key,
	id_product int null,
	title varchar(128) null,
	url longtext null,
	constraint product_images_ibfk_1
		foreign key (id_product) references product (id)
);

create index id_product
	on product_images (id_product);

create table role
(
	id int auto_increment
		primary key,
	title varchar(64) null,
	constraint title
		unique (title)
);

create table shipping_address
(
	id int auto_increment
		primary key,
	city varchar(64) null,
	address varchar(64) null,
	postcode int null
);

create table user_info
(
	id int auto_increment
		primary key,
	full_name varchar(128) null,
	email varchar(128) null,
	telephone varchar(128) null,
	id_shipping_address int null,
	constraint email
		unique (email),
	constraint user_info_ibfk_1
		foreign key (id_shipping_address) references shipping_address (id)
);

create table orders
(
	id int auto_increment
		primary key,
	id_user_info int null,
	date date null,
	total double null,
	order_status varchar(64) default 'NA CEKANJU' null,
	constraint orders_ibfk_1
		foreign key (id_user_info) references user_info (id)
);

create table order_products
(
	id_order int null,
	id_product int null,
	constraint order_products_ibfk_1
		foreign key (id_order) references orders (id),
	constraint order_products_ibfk_2
		foreign key (id_product) references product (id)
);

create index id_order
	on order_products (id_order);

create index id_product
	on order_products (id_product);

create index id_user_info
	on orders (id_user_info);

create table user
(
	id int auto_increment
		primary key,
	username varchar(64) not null,
	password varchar(64) not null,
	id_role int null,
	id_user_info int null,
	constraint username
		unique (username),
	constraint user_ibfk_1
		foreign key (id_role) references role (id),
	constraint user_ibfk_2
		foreign key (id_user_info) references user_info (id)
);

create index id_role
	on user (id_role);

create index id_user_info
	on user (id_user_info);

create index id_shipping_address
	on user_info (id_shipping_address);

```

You can run SQL script in next step to skip basic admin registration.

```mysql
INSERT INTO `role` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_CLIENT');
```
```mysql
INSERT INTO `user` VALUES (1,'admin','$2a$10$DZU0pMbWAdM2F4js0wLAhuxMO4XnnaQPFeXeNKzZ.kY79Xgllv1qW',1,NULL)
```

## Backend

**Open Intellij**

* Open foleder **ecommerce-backend** as project
* After that you can click **PLAY** button and run project

## Frontend

* Open folder **ecommerce-frontend**
* In console you can type **npm start**

After that you can open browser and go to address **http://localhost:4200/** .
