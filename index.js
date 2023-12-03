const mongoose = require("mongoose");
const app = require("./src/app");
const config = require("./src/app/config/index");
async function main() {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(`referral code app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
