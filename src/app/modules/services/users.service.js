const UserModel = require("../models/users.model");

const createUserInToDB = async (user) => {
  // first finding user with this email, If findOneAndUpdate, means duplicate email, cause somethime  {unique: true} not works on the schema
  const userData = await UserModel.findOne({ email: user?.email });

  if (userData?.email) {
    return false;
  }
  const lastUser = await UserModel.findOne().sort({
    referredID: -1,
  });

  if (lastUser?.referredID) {
    user.referredID = lastUser?.referredID + 1;
    user.referredTo = Math.ceil((user.referredID - 1) / 4);
  } else {
    user.referredID = 1;
    user.referredTo = 0;
  }
  const encryptPass = await encrypt.cryptPassword(user.password);
  const result = await UserModel.create({ ...user, password: encryptPass });
  return result;
};

const userServices = { createUserInToDB };

module.exports = userServices;
