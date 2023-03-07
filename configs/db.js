const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://prakash:prakash@cluster0.qlsi5.mongodb.net/BeUS?retryWrites=true&w=majority"
  );
};
