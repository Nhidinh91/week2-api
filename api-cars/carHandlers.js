const Car = require('./carLib');

const getAllCars = (req, res) => {
    res.json(Car.getAll());
};

const getCarById = (req, res) => {
    const carId = req.params.carId;
    const car = Car.findById(carId);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
}

const createCar = (req, res) => {
    const {model, color, age} = req.body;
    const newCar = Car.addOne(model, color, age);
    if (newCar) {
        res.json(newCar);
    } else {
        res.status(500).json({message:'Fail to create car'});
    }
}

const updateCar = (req, res) => {
    const carId = req.params.carId;
    const {model, color, age} = req.body;
    const updatedCar = Car.updateOneById(carId, {model, color, age});
    if (updatedCar){
        res.json(updatedCar);
    } else {
        res.status(404).json({message: "Car not found"});
    }
}

const deleteCar = (req, res) => {
    const carId = req.params.carId;
    const isDeleted = Car.deleteOneById(carId);
    if (isDeleted) {
        res.json({message: "Deleted successfully"});
    } else {
        res.status(404).json({message: "Car not found"});
    }
}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};