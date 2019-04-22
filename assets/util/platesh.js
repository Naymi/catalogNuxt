/* eslint-disable */
export default function platesh(sum, period, rate) {
  let i, koef, result
  // ставка в месяц
  i = rate / 12 / 100
  // коэффициент аннуитета
  koef = i * Math.pow(1 + i, period) / (Math.pow(1 + i, period) - 1)
  // итог
  result = sum * koef
  // округлим до целых
  return ~~result
};