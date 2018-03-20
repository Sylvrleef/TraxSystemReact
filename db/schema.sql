DROP DATABASE IF EXISTS traxx_db;
CREATE DATABASE traxx_db;

USE traxx_db;

CREATE TABLE items
(
  item_id INT AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(50) NOT NULL,
  item_quant INT(10) NOT NULL,
  item_unit VARCHAR(25) NOT NULL,
  unit_price DECIMAL(13,2) NOT NULL,
  request_id INT(10),
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (item_id),
);

