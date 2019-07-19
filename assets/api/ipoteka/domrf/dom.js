export default function(test, data) {
  let rate
  if (data.type === "Вторичка") {
    rate = (data.firstInstallmentPercentage <= 50 && 12.5) || 11.5
  } else {
    rate = (data.firstInstallmentPercentage <= 20 && 11) || 9.7
  }
  const firstInstallmentPercentage = data.maternalСapital ? 10 : 15
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
      500000,
      /* до */
      data.region ? 15000000 : 30000000
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
        rate: rate + 0.5,
        firstInstallmentPercentage: 35
      },
      ИП: {
        rate: rate,
        firstInstallmentPercentage: 35
      }
    }

  return false
}
