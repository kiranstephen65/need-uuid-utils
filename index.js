// uuidUtils.js
const uuid = require('uuid');
const nanoid = require('nanoid');

const generateUUIDv4 = () => {
  return uuid.v4();
};

const generateNanoID = () => {
  return nanoid.nanoid();
};

module.exports = {
  generateUUIDv4,
  generateNanoID,
};