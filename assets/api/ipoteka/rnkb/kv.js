export default function(test, data) {
  const rate = 11.5
  const firstInstallmentPercentage = 15
  const conditions = {
    creditTerm: [
      /* от */
      3,
      /* до */
      25,
    ],
    firstInstallmentPercentage,
    creditAmount: [
      /* от */
      600000,
      /* до */
      data.region ? 12000000 : 15000000,
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': !data.region && {
        rate: 12.5,
        firstInstallmentPercentage: 35,
      },
      ИП: data.creditTerm <= 15 && {
        rate,
        firstInstallmentPercentage,
      },
    }

  return false
}
