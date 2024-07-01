function getLottoNumbers(maxNumber) {
  if (maxNumber < 1) {
    throw new Error("Maximum number must be 1 or greater");
  }

  let numbers = [];
  for (let i = 1; i <= maxNumber; i++) {
    numbers.push(i);
  }

  let lottoNumbers = [];
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    lottoNumbers.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return lottoNumbers;
}

export default getLottoNumbers;
