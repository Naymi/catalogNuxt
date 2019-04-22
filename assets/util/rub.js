export default function rub(num) {
  const str = String(num)
  if (+str[str.length - 2] === 1) {
    return 'рублей'
  }
  if (str[str.length - 1] >= 5 || +str[str.length - 1] === 0) {
    return 'рублей'
  }
  if (+str[str.length - 1] === 1) {
    return 'рубль'
  }
  return 'рубля'
}
