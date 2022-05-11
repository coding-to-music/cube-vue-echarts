// npm install jsonwebtoken

// run via
// node get-jwt-token.js

const jwt = require("jsonwebtoken");
// const CUBE_API_SECRET = "<Secret>";
const CUBE_API_SECRET =

const cubejsToken = jwt.sign({}, CUBE_API_SECRET, { expiresIn: "30d" });

console.log(cubejsToken);
