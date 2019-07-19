export default function(test, data) {
  const rate = data.firstInstallmentPercentage <= 20 ? 11.25 : 11
  const firstInstallmentPercentage = data.maternalСapital ? 5 : 15
  const conditions = {
    creditTerm: [3, 25],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      300000,
      /* до */
      data.region ? 6000000 : 15000000
    ]
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: 11.5,
        firstInstallmentPercentage: 20
      },
      "2_документа": {
        rate: 12,
        firstInstallmentPercentage: 35
      },
      ИП: {
        rate: 11.75,
        firstInstallmentPercentage: 20
      }
    }

  return false
}
