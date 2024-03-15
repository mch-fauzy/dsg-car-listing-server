CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    merek VARCHAR(255) NOT NULL,
    jenis VARCHAR(255) NOT NULL,
    stok INT NOT NULL,
    harga INT NOT NULL,
    keterangan TEXT
);
