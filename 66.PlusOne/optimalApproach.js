var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    if (i == 0 && digits[i] == 9) {
      console.log(digits);
      digits[i] = 0;
      digits.unshift(1);
      return digits;
    }
    digits[i] = 0;
  }
};
