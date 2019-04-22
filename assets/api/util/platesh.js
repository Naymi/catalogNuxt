import platesh from '~/assets/util/platesh.js'
export default function decorPlatesh({ creditAmount, creditTerm, rate }) {
  return platesh(creditAmount, creditTerm * 12 - 2, rate)
}
