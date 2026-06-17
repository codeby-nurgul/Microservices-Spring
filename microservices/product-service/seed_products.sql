-- PostgreSQL script to seed 1,000,000 random products
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price NUMERIC(38, 2),
    stock INT
);

INSERT INTO products (id, name, description, price, stock)
SELECT
    gen_random_uuid(),
    'Product ' || seq,
    'Description for product ' || seq,
    (random() * 1000)::numeric(10, 2),
    floor(random() * 500 + 1)::int
FROM generate_series(1, 1000000) AS seq;
