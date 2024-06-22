function requiredText(label) {
  const text = `Vehicle ${label} field is required. Please fill it.`;
  return [true, text];
}

module.exports = {
  requiredText,
};
