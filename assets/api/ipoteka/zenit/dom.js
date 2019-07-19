export default function(test, data) {
  const rate = 11.45
  const firstInstallmentPercentage = data.maternalСapital ? 10 : 30
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
      data.region ? 375000 : 625000,
      /* до */
      data.region ? 18000000 : 25000000
    ]
  }
  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: rate + 0.5,
        firstInstallmentPercentage
      },
      "2_документа":
        data.creditTerm > 1 && data.creditTerm < 20 && data.region
          ? data.creditAmount < 6000000
          : data.creditAmount < 8000000 && {
              rate,
              firstInstallmentPercentage: 50
            },
      ИП: {
        rate,
        firstInstallmentPercentage
      }
    }

  return false
}
