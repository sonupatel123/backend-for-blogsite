const express = require('express');
const Model = require('../models/User_Management');
const router = express.Router();
const controller = require('../controller');

    router.post('/signUp', controller.signUp);
    router.get('/logIn', controller.logIn);
    router.get('/getPost/:id',controller.getPost);
    router.patch('/createPost/:id',controller.createPost);
    router.patch('/editPost/:id',controller.editPost);
    router.patch('/deletePost/:id',controller.deletePost);

    module.exports = router
