class CustomAPIError extends Error {
  constructor(message) {
    //pertama kali di running
    super(message);
  }
}
module.exports = CustomAPIError;
