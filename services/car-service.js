const { CarRepository } = require('../repository');

class CarService {
    static async getCars(page, size) {
        try {
            return await CarRepository.getCars(page, size);
        } catch (error) {
            throw error;
        }
    }

    static async insertCar(merek, jenis, stok, harga, keterangan) {
        try {
            await CarRepository.insertCar(merek, jenis, stok, harga, keterangan);
        } catch (error) {
            throw error;
        }
    }

    static async deleteCarById(id) {
        try {
            await CarRepository.deleteCarById(id);
        } catch (error) {
            throw error;
        }
    }

    static async updateCarById(id, merek, jenis, stok, harga, keterangan) {
        try {
            await CarRepository.updateCarById(id, merek, jenis, stok, harga, keterangan);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarService;
