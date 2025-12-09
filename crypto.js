import crypto from "crypto";
import "dotenv/config";
// hashing a string-> createhash(), update(), digest()
// hashing is very importent to avoid security issues
function hashText(text) {
  return crypto
    .createHash("sha256") //creating a hash with a fix algorithm
    .update(text, "utf-8") //add the data
    .digest("hex");
}

const password = "password1234";
const hash = hashText(password);
console.log(hash); // getting the hashed data

// Generating secure random tokens
function generateToken(bytes = 16) {
  return crypto.randomBytes(bytes).toString("hex");
}

console.log(`16-byte token: ${generateToken()}`);
console.log(`32-byte token: ${generateToken(32)}`);

//these thigs must be moved to .env
const algorithm = process.env.ALGORITHM;
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
console.log(algorithm);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv); // creating the cypher
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

function decrypt(encryptedHex) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedHex, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const message = "hello crypto";
const encrypted = encrypt(message);
const decrypted = decrypt(encrypted);
console.log(`original : ${message}`);
console.log(`encrypted: ${encrypted}`);
console.log(`decrypted: ${decrypted}`);
