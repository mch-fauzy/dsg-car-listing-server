const { CarService } = require('../services');

class CarController {
    static async getCars(req, res) {
        try {
            const { page, size } = req.query;
            const cars = await CarService.getCars(page, size);
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async insertCar(req, res) {
        try {
            const { merek, jenis, stok, harga, keterangan } = req.body;
            await CarService.insertCar(merek, jenis, stok, harga, keterangan);
            res.status(201).json({ message: 'Success' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCarById(req, res) {
        try {
            const { id } = req.params;
            await CarService.deleteCarById(id);
            res.status(204).json({ message: 'Success' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateCarById(req, res) {
        try {
            const { id } = req.params;
            const { merek, jenis, stok, harga, keterangan } = req.body;
            await CarService.updateCarById(id, merek, jenis, stok, harga, keterangan);
            res.status(200).json({ message: 'Success' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CarController;
