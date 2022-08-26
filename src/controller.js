const Model = require('./models/User_Management');

const signUp = async function(req, res, next) {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        post : []
       
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
    next();
}
const logIn = async function(req, res, next) {
    try {
        const data = await Model.find();
       res.json(data);
   }
   catch (error) {
       res.status(500).json({ message: error.message });
   }
    next();
}
const getPost = async function(req, res, next) {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    next();
}
const createPost = async function(req, res, next) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    next();
}
const editPost = async function(req, res, next) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    next();
}
const deletePost = async function(req, res, next) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    next();
}

module.exports = {
   logIn,
   signUp,
   createPost,
   editPost,
   deletePost,
   getPost
  }