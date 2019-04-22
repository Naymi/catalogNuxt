export default function(test, data) {
  const rate = data.type === "Новостройка" ? 9.99 : 10.49
  const firstInstallmentPercentage = 20
  const conditions = {
    creditTerm: [
      /* от */
      3,
      /* до */
      30
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      600000,
      /* до */
      50000000
    ]
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage
      },
      "2_документа": {
        rate: rate + 0.7,
        firstInstallmentPercentage: 40
      },
      ИП: {
        rate,
        firstInstallmentPercentage
      }
    }

  return false
}
