export default function getPostfixYear(age) {
  let postfix, count
  age = Math.abs(age)
  postfix = 'лет'
  count = parseInt(age) % 100
  if (!(count >= 5 && count <= 20)) {
    count = count % 10
    if (+count === 1) {
      postfix = 'год'
    } else if (count >= 2 && count <= 4) {
      postfix = 'года'
    }
  }
  return postfix
}
