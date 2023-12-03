const userServices = require("../services/users.service");

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await userServices.createUserInToDB(user);

    if (result?.email) {
      res.json({
        success: true,
        message: "User created successfully",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "duplicate email",
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

const userControllers = { createUser };
module.exports = userControllers;
