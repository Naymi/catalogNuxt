export default function (test, data) {
  const rate = data.firstInstallmentPercentage < 20 ? 11.6 : 11.4
  const firstInstallmentPercentage = data.motherCapital ? 0 : 15
  const conditions = {
    creditTerm: [
      /* от */
      1,
      /* до */
      30
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      3e5,
      /* до */
      Infinity
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      'Форма_банка': {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: 11.7,
        firstInstallmentPercentage: 50,
      },
      ИП: {
        rate,
        firstInstallmentPercentage,
      },
    }

  return false
}
