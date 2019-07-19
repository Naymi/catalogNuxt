export default function(test, data) {
  if (data.type === 'Новостройка') return false
  const rate = 12.5
  const firstInstallmentPercentage = 50
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
      3e5,
      /* до */
      Infinity,
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate: 13,
        firstInstallmentPercentage: 40,
      },
      '2_документа': {
        rate: 13.5,
        firstInstallmentPercentage: 50,
      },
      ИП: {
        rate: 13.75,
        firstInstallmentPercentage,
      },
    }

  return false
}
