const { Schema, model } = require("mongoose");
const validator = require("validator");
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name must be provided"],
    maxLength: [20, "Name must 3-20 characters"],
    minLength: [5, "Name must 3-20 characters"],
  },
  email: {
    type: String,
    trim: true,
    index: true,
    unique: true,
    required: [true, "Email must be provided"],
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password must be provided"],
    // validate: {
    //   validator: (value) =>
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(
    //       value
    //     ),
    //   message: "Invalid password",
    // },
  },
  referredID: {
    type: Number,
    index: true,
    unique: true,
    required: [true, "ReferredID must be provided"],
  },
  referredTo: {
    type: Number,
    required: [true, "ReferredTo id must be provided"],
  },
});


const UserModel = model("user", userSchema);

module.exports = UserModel;
