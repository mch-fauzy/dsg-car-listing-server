const infras = require('../infras');

class CarRepository {
    static async getCars(page = 1, size = 10) {
        try {
            page = parseInt(page);
            size = parseInt(size);
            const offset = (page - 1) * size;
            const query = 'SELECT id, merek, jenis, stok, harga, keterangan FROM products LIMIT $1 OFFSET $2';
            const result = await infras.pool.query(query, [size, offset]);

            const totalRows = parseInt((await infras.pool.query('SELECT COUNT(*) FROM products')).rows[0].count);
            const totalPages = Math.ceil(totalRows / size);

            const cars = result.rows

            return {
                data: cars,
                metadata: {
                    totalData: totalRows,
                    totalPages: totalPages,
                    currentPage: page,
                    nextPage: page < totalPages ? page + 1 : null,
                    previousPage: page > 1 ? page - 1 : null,
                }
            };
        } catch (error) {
            throw error;
        }
    }

    static async insertCar(merek, jenis, stok, harga, keterangan) {
        try {
            const query = 'INSERT INTO products (id, merek, jenis, stok, harga, keterangan) VALUES ($1, $2, $3, $4, $5, $6)';

            if (!merek || !jenis || !stok || !harga || !keterangan) {
                throw new Error('fields are required');
            }

            const maxIdResult = await infras.pool.query('SELECT MAX(id) FROM products');
            const maxId = maxIdResult.rows[0].max || 0;
            const id = maxId + 1;

            await infras.pool.query(query, [id, merek, jenis, stok, harga, keterangan]);
        } catch (error) {
            throw error;
        }
    }

    static async deleteCarById(id) {
        try {
            const carExistsQuery = 'SELECT id FROM products WHERE id = $1';
            const carExistsResult = await infras.pool.query(carExistsQuery, [id]);

            if (carExistsResult.rows.length === 0) {
                throw new Error('car not found');
            }

            const deleteQuery = 'DELETE FROM products WHERE id = $1';
            await infras.pool.query(deleteQuery, [id]);
        } catch (error) {
            throw error;
        }
    }

    static async updateCarById(id, merek, jenis, stok, harga, keterangan) {
        try {
            const carExistsQuery = 'SELECT id FROM products WHERE id = $1';
            const carExistsResult = await infras.pool.query(carExistsQuery, [id]);

            if (carExistsResult.rows.length === 0) {
                throw new Error('car not found');
            }

            if (!merek || !jenis || !stok || !harga || !keterangan) {
                throw new Error('fields are required');
            }

            const updateQuery = 'UPDATE products SET merek = $2, jenis = $3, stok = $4, harga = $5, keterangan = $6 WHERE id = $1';
            await infras.pool.query(updateQuery, [id, merek, jenis, stok, harga, keterangan]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarRepository;
