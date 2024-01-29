const jwt = require("jsonwebtoken");

const checkLogin = function (req, res, next) {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRETE_KEY);
        const { username, userId} = decodedToken;
        req.username = username;
        req.userId = userId;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = checkLogin;