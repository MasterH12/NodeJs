const crypto = require('crypto');

const text = "Hello, crypto world";

const hash = crypto.createHash('sha256').update(text).digest("hex");

console.log("texto original: ", text);
console.log("hash SHA-256: ", hash);