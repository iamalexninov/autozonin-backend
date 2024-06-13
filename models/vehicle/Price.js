const { Schema, model } = require("mongoose");

const priceSchema = new Schema({
  amount: { type: Number, required: true },
  currency: { type: String, default: "USD" },
  negotiable: { type: Boolean, default: false },
  financingAvailable: { type: Boolean, default: false },
  leaseAvailable: { type: Boolean, default: false },
  downPayment: { type: Number },
  monthlyPayment: { type: Number },
  taxRate: { type: Number },
  taxAmount: { type: Number },
});

const Price = model("Price", priceSchema);

module.exports = Price;
