export default function(test, data) {
  if (data.type == 'Вторичка') {
    return false
  }
  let rate = 10.05
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
      1e5,
      /* до */
      1e7,
    ],
  }

  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': data.creditTerm > 5 && {
        rate: 11,
        firstInstallmentPercentage: 50,
      },
      ИП: {
        rate: 10.5,
        firstInstallmentPercentage: 20,
      },
    }

  return false
}
