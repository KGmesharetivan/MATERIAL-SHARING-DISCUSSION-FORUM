const jwt = require("jsonwebtoken");

// Your secret key - this should be a long, random, and secure string
const secretKey = "93ec1c205ebb43d5d8ea8ea7e25db4cd"; // Replace with your own secret key

// Payload data - the data you want to encode in the JWT
const payload = {
  userId: 123, // Example user ID
  otherData: "SomeOtherData", // Any other data you want to include
};

// Token expiration time
const expiresIn = "1h"; // Token will expire in 1 hour

// Generate the token
const token = jwt.sign(payload, secretKey, { expiresIn: expiresIn });

console.log("Generated JWT:", token);
