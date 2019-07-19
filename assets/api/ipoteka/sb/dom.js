export default function(test, data) {
  const rate = 12.4
  const firstInstallmentPercentage = data.motherCapital ? 0 : 25
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
      300000,
      /* до */
      Infinity
    ]
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage
      },
      "2_документа": {},
      ИП: {
        rate,
        firstInstallmentPercentage
      }
    }

  return false
}
