const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log("TOKEN:", token);
        
        if (!token) {
            return res.redirect('/user/login');
        }

        const decoded = jwt.verify(token, "secretKey");
        req.user = decoded;

        next();

    } catch (err) {
        console.log("JWT Error:", err.message);
        return res.redirect('/user/login');
    }
};

module.exports = auth;