const express = require('express');
const Router = express.Router();

/**
 * Controllers (route handlers).
 */
const HomeController = require('./../controllers/HomeController');
const UserController = require('./../controllers/UserController');

/**
 * Define Routes.
 */
Router.get('/',      HomeController.index);
Router.get('/users', UserController.index);

module.exports = Router;
