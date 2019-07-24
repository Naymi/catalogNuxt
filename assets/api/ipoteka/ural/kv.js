export default function(test, data) {
  let rate
  let firstInstallmentPercentage = data.maternalСapital ? 10 : 15
  if (data.type === 'Новостройка') {
    rate = data.creditAmount <= 5e6 ? 10.25 : 9.7
    if (data.firstInstallmentPercentage <= 20) {
      rate += 0.2
    }
  } else {
    rate = data.creditAmount <= 5e6 ? 10.25 : 9.7
  }
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
        rate: rate,
        firstInstallmentPercentage,
      },
      '2_документа': {
        rate: +rate + 0.5,
        firstInstallmentPercentage: 40,
      },
      ИП: {
        rate: rate + 1,
        firstInstallmentPercentage: 40,
      },
    }

  return false
}
