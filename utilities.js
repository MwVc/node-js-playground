// Contains random functions

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export function celsciusToFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}
