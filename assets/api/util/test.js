export default function test(conditions, data) {
  if (conditions.firstInstallmentPercentage > data.firstInstallmentPercentage) {
    return !1
  }
  if (
    conditions.creditAmount[0] > data.creditAmount ||
    conditions.creditAmount[1] < data.creditAmount
  ) {
    return !1
  }
  if (
    conditions.creditTerm[0] > data.creditTerm ||
    conditions.creditTerm[1] < data.creditTerm
  ) {
    return !1
  }
  return !0
}
