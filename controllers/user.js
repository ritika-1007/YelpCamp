const User = require('../models/user');

module.exports.renderRegisterForm = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Succesfully Registered");
            res.redirect("/campgrounds");
        })
    }
    catch (e) {
        req.flash("error", e.message);
        res.render("users/register");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back");
    res.redirect('/campgrounds');
}
module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err)
            return next(err);
        req.flash("success", "Successfully Logged Out")
        res.redirect("/campgrounds");
    })
}