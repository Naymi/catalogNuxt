export default function(test, data) {
  const rate = 10.2
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
      '2_документа': ((data.region && data.creditAmount < 7e6) ||
        (!data.region && data.creditAmount < 10e6)) && {
        rate: 10.7,
        firstInstallmentPercentage: 40,
      },
      ИП: {},
    }

  return false
}
