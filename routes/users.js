const express = require('express');
const router = express.Router();
const User = require('../models/user');
const users = require('../controllers/user');
const AppError = require('../utils/AppError');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
router.route('/register')
    .get(users.renderRegisterForm)
    .post(wrapAsync(users.register))
router
router.route("/login")
    .get(users.renderLoginForm)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), wrapAsync(users.login))
router.get("/logout", users.logout);

module.exports = router;