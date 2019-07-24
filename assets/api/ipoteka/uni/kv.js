export default function(test, data) {
  let rate = data.creditAmount >= 5e6 ? 10 : 10.25
  if (data.type === 'Вторичка') {
    rate += 0.25
  }
  const firstInstallmentPercentage = data.motherCapital ? 0 : 20
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
      250000,
      /* до */
      9000000,
    ],
  }
  if (test(conditions, data))
    return {
      rate,
      Форма_банка: {
        rate,
        firstInstallmentPercentage,
      },
      '2_документа': {},
      ИП: {
        rate,
        firstInstallmentPercentage: 50,
      },
    }

  return false
}
