const mongoose = require ('mongoose');

const departments = [ "admin", "rrhh", "support", "contracts", "proyects"]

const employeeSchema = new mongoose.Schema({

    name:{
      type: String,
      required: [true, 'The salary is required'],
      trim: true,
      },

    salary:{
      type: Number,
      required: [true, 'The salary is required'],
      trim: true,
      },

    department:{
      type: String,
      enum: departments,
      require: [true, 'You must select a department'],
      }

  },  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  });
  
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;