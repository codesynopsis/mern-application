const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    }
});

const MernToDo = mongoose.model("merntodo", TodoSchema);

module.exports = MernToDo;