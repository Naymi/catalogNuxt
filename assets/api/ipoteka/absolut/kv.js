export default function(test, data) {
  const rate = 11.5
  const firstInstallmentPercentage = 20
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
      3e5,
      /* до */
      50e6,
    ],
  }

  return (
    test(conditions, data) && {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': data.creditAmount <= 6e6 && {
        rate: rate + 1,
        firstInstallmentPercentage: 40,
      },
      ИП: {
        rate: rate + 1,
        firstInstallmentPercentage,
      },
    }
  )
}
