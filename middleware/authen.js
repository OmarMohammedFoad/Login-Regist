const jwt = require("jsonwebtoken");


const config = process.env;


const verifyToken = (req, res, next) => {
    // console.log(req.headers["token"]);
  const token =
    req.body.token || req.query.token || req.headers["token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token,"secret" ,config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;