export default function(test, data) {
  const rate = 10.8
  const firstInstallmentPercentage = data.maternalСapital ? 5 : 15
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
      500000,
      /* до */
      data.region ? 45000000 : 60000000,
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: 11,
        firstInstallmentPercentage: 40,
      },
      ИП: {},
    }

  return false
}
