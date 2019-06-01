const createError = require("http-errors");
const Employee = require("../models/employee.model");




module.exports.list = (req, res, next) => {
  Employee.find({})
    .then(employee => {
      res.json(employee);
    })
    .catch(next);
};

module.exports.addEmployee = (req, res, next) => {
  new Employee({ ...req.body })
    .save()
    .then(employee => res.status(201).json(employee))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(employee => {
      if (employee) {
        res.json("Employee deleted");
      } else {
        throw createError(404, "Employee not found");
      }
    })
    .catch(next);
};

// module.exports.getGraph = (req, res, next) => {
//   Car.findById(req.params.id)
//     .then(car => {
//       if (car) {
//         res.status(201).json(car);
//       } else {
//         throw createError(404, "car not found");
//       }
//     })
//     .catch(next);
// };




