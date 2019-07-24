export default function(test, data) {
  const rate = data.creditAmount <= 5e6 ? 11.4 : 10.7
  const firstInstallmentPercentage = data.maternalСapital ? 10 : 50
  const conditions = {
    creditTerm: [
      /* от */
      3,
      /* до */
      30,
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      300000,
      /* до */
      data.region ? 6000000 : 15000000,
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
