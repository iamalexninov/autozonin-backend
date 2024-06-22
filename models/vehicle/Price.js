const price = {
  amount: { type: Number },
  currency: { type: String, default: "€" },
  negotiable: { type: Boolean, default: false },
  leaseAvailable: { type: Boolean, default: false },
  leaseInititalPayment: { type: Number },
  monthlyPayment: { type: Number },
};

module.exports = price;
