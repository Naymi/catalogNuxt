import postfix from './srcpostfixYear'
export default function getPostfixYear(age) {
  return age + ' ' + postfix(age)
}
