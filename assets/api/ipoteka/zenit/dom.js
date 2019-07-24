export default function(test, data) {
  const rate = 11.75
  const firstInstallmentPercentage = data.maternalСapital ? 15 : 30
  const conditions = {
    creditTerm: [
      /* от */
      1,
      /* до */
      30,
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      data.region ? 375000 : 625000,
      /* до */
      data.region ? 18000000 : 25000000,
    ],
  }
  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: rate + 0.5,
        firstInstallmentPercentage,
      },
      '2_документа': {},
      ИП: {
        rate: rate + 1,
        firstInstallmentPercentage,
      },
    }

  return false
}
