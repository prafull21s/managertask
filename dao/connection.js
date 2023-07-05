const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true });

// Create a connection schema
const connSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

var taskModel = new mongoose.Schema({
  name: String,
  discription: String,
  createddate: String,
  enddate: String,
  Status: String,
  message: {
    message: String,
    Comment: String,
  },
});
// updateOne({ email: 'test2@google.com' }, { email: 'test@google.com' });
async function createDoc(task) {
  return new Promise((resolve, reject) => {
    const connModel = mongoose.model("conn", taskModel);
    const newDoc = new connModel(task);
    newDoc.save((error, result) => {
      if (error) {
        console.log(error);
        reject ({ status: 500, message: "Internal server Error" });
      } else {
        console.log("Document added to collection", result);
        resolve ({ status: 200, task: result });
      }
    });
  });
}

async function getData(taskId) {
  try {
    const doc = await connModel.findOne({ id: taskId });
    console.log(doc);
    return doc;
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Internal server Error" };
  }
}

async function getOne(id) {
  return new Promise((resolve, reject) => {
    const connModel = mongoose.model("conn", taskModel);
    connModel.findOne({ "id": id,}, function (err, docs) {
      if (err) {
        console.log(error);
        reject ({ status: 500, message: "Internal server Error" });
      } else {
        console.log("Document collection",docs);
        resolve ({ status: 200, task: docs });
      }

    });
  });
}

async function getAll(task) {
  return new Promise((resolve, reject) => {
    const connModel = mongoose.model("conn", taskModel);
    resolve (connModel.find({}));
  });
}

module.exports = {
  createDoc,
  getData,
  getAll,
  getOne
};


