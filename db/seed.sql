CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  description VARCHAR(80),
  price INT,
  image_url TEXT
);

INSERT INTO product (name, description, price, image_url)
VALUES ('hat', 'yellow ball cap', 12.99, 'url'), ('ball', 'white base ball', 8.99, 'url'), ('shirt', 'pink shirt', 15.99, 'url');