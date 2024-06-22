const { requiredText } = require("../../utils/utils");

const location = {
  address: { type: String, required: requiredText("Address") },
  latitude: { type: Number, required: requiredText("Latitude") },
  longitude: { type: Number, required: requiredText("Longitude") },
};

module.exports = location;
