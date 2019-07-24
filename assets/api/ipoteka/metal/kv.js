export default function(test, data) {
  const rate =
    data.firstInstallmentPercentage <= 30
      ? 11.5
      : data.firstInstallmentPercentage <= 50
      ? 11.25
      : 11
  const firstInstallmentPercentage = 10
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
      data.region ? 250000 : 500000,
      /* до */
      data.region ? 12000000 : 25000000,
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
        rate: rate + 1,
        firstInstallmentPercentage,
      },
      ИП: {
        rate: rate + 0.5,
        firstInstallmentPercentage,
      },
    }

  return false
}
